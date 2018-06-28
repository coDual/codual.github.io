---
layout: post
title: Moving the log to a Jekyll collection
authors: [psi]
tags: [notebook]
code: true
lang: en
hidden: true
description: A use-case for Jekyll collections
---

*This post assumes basic knowledge of [Jekyll](https://jekyllrb.com/).*

Since the beginning of this year I've been writing down a [weekly log](/log/2018/) of articles, books, podcasts and others that I've specially enjoyed.
Initially I wrote it down in one big Markdown file that translated into a single HTML page but recently I finally got to separate each week into its own page. 
This turned out to be pretty easy to do using [Jekyll Collections](https://jekyllrb.com/docs/collections/) so I decided to write down the necessary steps to use it as documentation.

# Creating the separate files

First I wanted to create separate files for each week so each week gets its own page.
To create the separate files I wrote a Python script to help me do the job.
The basic idea is to loop through every Monday with a `datetime.date` object and create the post associated with that Monday's week. I decided each post should have:

1. A *title* which states the week number as well as the start and end of the week
2. A *date of publication*; this allows me to hide unfinished weeks and to create an RSS of the log.
4. An *id*. The single-page version had an anchor link to every week so to prevent link-rot I saved those. Luckily I used the week number as an id so I don't have to parse it from the source file
5. The actual *content* of the week.

After going through Liquid's documentation I decided to hard-code the title as a string in Python.
Liquid has [limited support](https://shopify.github.io/liquid/filters/date/) for date formatting but it's English-only so it wouldn't work without extra plugins[^work].
To get the title given the Monday date I wrote this function using [`datetime`](https://docs.python.org/3/library/datetime.html):

```python
SUNDAY = timedelta(days = 6) # 6 days timedelta
name = lambda dt: dt.strftime("%d de %B") # %d is the day, %B is the month name

def get_title(dt):
  """Gets title of week log given Monday date.""""
  n = dt.isocalendar()[1]
  start, end = name(dt), name(dt + SUNDAY)
  return "Semana {0} ({1} a {2})".format(n,start,end)
```

To get the names in Spanish I set the locale using [`locale`](https://docs.python.org/3.6/library/locale.html)'s `setlocale`.
Unfortunately locale names are not standardized so my locale in Linux Mint (`es_ES.utf8`) might not work in your computer (sad!).

To build posts I wrote a function that writes the YAML [front matter](https://jekyllrb.com/docs/frontmatter/) using [`ruamel.yaml`](https://pypi.org/project/ruamel.yaml/) and after that writes the content[^details]:

```python
def build_post(dt, content):
  """Creates post for a certain week given date and content."""

  name = ...
  frontmatter = dict(...)

  with open(name, 'w') as week_log:
    week_log.write("---\n")
    yaml.dump(frontmatter, week_log)
    week_log.write("---\n")
    week_log.write(content)
```


To get the contents I just go line by line in the source file and I split the contents:

```python
contents = []
with open("2018.md", 'r') as w2018:
  cur_week = ""
  for line in w2018.readlines():
    if line.startswith("<h3"):
      contents.append(cur_week)
      cur_week = ""
    else:
      cur_week += line
contents.append(cur_week)
```

That way `contents[i]` has week number `i` contents and I just need to build each post until the current week:

```python
cur_monday  = date(2018,1,1)
while cur_monday <= date(2018, 6, 24):
  week_number = cur_monday.isocalendar()[1]
  build_post(cur_monday, contents[week_number])
  cur_monday += timedelta(weeks = 1)
```

And that's it! You can check the complete script [here](https://gist.github.com/mx-psi/b655cd53d325411a12eb8d6174a2dee6).

# Defining a collection

Simply put, a Jekyll collection named `collection` is a set of files in the folder `_collection` (the underscore is important!) with an object `site.collection` you can use in Liquid code in your page.
If you've ever used Jekyll you already know two (special) examples: posts and drafts (whose associated sets of files are, of course, in the folders `_posts` and `_drafts`).

For this project I defined a collection called `log` and I stated that I wanted [each file to have its own page](https://jekyllrb.com/docs/collections/#step3):

```yaml
collections:
  log:
    output: true
```

I also specified a custom layout for log files in `defaults`[^def]:

```yaml
defaults:
  - scope:
      path: ""
      type: log
    values:
      layout: log
```

The only remaining step now is to populate the `_log` folder with the files I created in the previous step (I moved them into `_log/2018` and I moved some other log-like posts to `_log/2016`).

You can do some other fancy things with collections such as adding arbitrary metadata or [configuring permalinks](https://jekyllrb.com/docs/collections/#permalinks) but I didn't need those for the log.

# Keeping the old page working

The final step is to keep the old page working so that I don't break any link.
This is where collections prove useful since you couldn't list the week logs in a page with Liquid otherwise.
To list the files as they were before we just loop through `site.log` to get every week
and add a little CSS for extra magic[^simple]:

```liquid
{{ "{% for item in site.log " }}%}
  <div class="week-header">
    <a  href="{{ " {{ item.url "}}}}">:anchor:</a> 
    <h3 id="{{ " {{ item.tag "}}}}">{{ "{{ item.title "}}}}</h3>
  </div>
  
  {{ "{{ item.content "}}}}
{{ "{% endfor "}}%}
```

And that is all. I hope this wasn't too boring, until next time!


[^work]: Unless of course I did the translation myself manually but I didn't want to spend time in that.

[^def]: I omitted certain existing configurations that only apply to posts; you can check the complete configuration [here](https://github.com/coDual/codual.github.io/blob/master/_config.yml).

[^details]: I glossed over a few details in this code snippet, you can check the complete code [here](https://gist.github.com/mx-psi/b655cd53d325411a12eb8d6174a2dee6).

[^simple]: As before this code snippet is simplified and the actual version is actually much uglier, check it [here](https://raw.githubusercontent.com/coDual/codual.github.io/master/log/2018.md).
