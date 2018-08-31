---
layout: post
title: Instagram is (probably) not listening to what you say
authors: [psi]
tags: [technology]
description: Some arguments on why Instagram and Facebook are probably not listening to what your conversations
hidden: true
---

Every few months I see some Twitter thread about how someone saw ads on Instagram related to something they spoke about with someone while their phone was nearby. Usually, this is followed by some claim along the lines of "Instagram is listening to what I say". Here is a list of 9 arguments in no particular order that explain why I think that is most likely not the case. These arguments are mostly applicable to any other social network or app.

# 1. [The law of truly large numbers](https://en.wikipedia.org/wiki/Law_of_truly_large_numbers)

You [spoke about some weird hiking-related gadget with your cousin](https://medium.com/@damln/instagram-is-listening-to-you-97e8f2c53023) one day. 
You didn't talk about it in any social network, or searched it on the Internet. 
Yet, almost miraculously, you got an Instagram ad the day after about that one specific product. What are the odds?

Well, it turns out it's quite likely for something like this to happen every now and then.
More than 500 million people use Instagram daily[^stats] and they spend, on average, 53 minutes[^dailyuse] using the app each day. That's a lot of ads, and a lot of opportunities for one of these seemingly unexplicable phenomena to happen. 

Even if each user only saw one ad per day and the chances of that ad being related to something they talked about that day were 1 in 1 million (both very conservative estimates in my opinion), that gives you, on average, 500 people per day with something like this happening to them. Stumbling upon someone sharing a story like this at some point on some social network appears to be quite likely. The world is big and [coincidences happen all the time](https://www.theatlantic.com/science/archive/2016/02/the-true-meaning-of-coincidences/463164/).

[^stats]: The figure is given by [statista](https://www.statista.com/statistics/657823/number-of-daily-active-instagram-users/) and is from september 2017 so the actual figure is probably higher (~625m if it grows at the same pace as monthly active users which recently got to 1 billion).

[^dailyuse]: That stat comes from [this article](https://www.recode.net/2018/6/25/17501224/instagram-facebook-snapchat-time-spent-growth-data).

# 2. Confirmation bias and the frequency illusion

An important point about the previous argument that might make it more convincing is that people tend to interpret ambiguous evidence as favouring their preconceived ideas. This phenomena known as [*confirmation bias*](https://en.wikipedia.org/wiki/Confirmation_bias) could make people interpret ads as related to their conversations topics even when, looked from an objective perspective, the relation is weak at best. This cognitive bias together with the [*frequency illusion*](https://en.wikipedia.org/wiki/List_of_cognitive_biases#Frequency_illusion) (we tend to see everywhere something we have experienced recently) makes it much easier for one to become convinced of the microphone tapping in the face of objectively dubious evidence.

# 3. No major newspaper has made any article confirming it

Rigorously testing whether Instagram or any other social network is prying on their users' lives through the microphone would be quite easy: you just need a normal phone, a phone without microphone, a list of random topics of conversation, some preregistered criteria of what counts as an ad that verifies the "Instagram is listening" hypothesis and some hours of dull (but easy) work. Yet, to my knowledge, no major news outlet has published any such study or even any sort of weaker claims that support the idea that Instagram (or any other major social media app) listening to you.

It would be a relatively simple thing to do and they would probably get a lot of bang for the buck given [the recent scandals](https://en.wikipedia.org/wiki/Cambridge_Analytica) Facebook (as a company that owns Instagram) has been involved in. Zuckerberg was even asked about Facebook tapping your phone in the US Congress and [publicly denied it](https://www.theverge.com/2018/4/10/17221478/zuckerberg-facebook-senate-listening-tapping-microphone)[^facebook].

[^facebook]: The wording of the question (*does Facebook use audio obtained from mobile devices to enrich personal information about users?*) is unclear to me and I am not sure if it is talking about Facebook as a company (in which case this would include Instagram) or Facebook as a social network (in this case it wouldn't). Nonetheless I think it is fairly reasonable to think that if Facebook used this kind of technology in one app they would probably use it in the other.

# 4. People fabricate fake stories for the Internet all the time 

In a similar vein to the first argument the sheer amount of people that use the Internet every day and the poor incentives that exist in some websites might motivate some people to fabricate stories that support this conspiracy, be it for money, fame or interfering in foreign elections. This [probably happens](http://slatestarcodex.com/2016/12/12/might-people-on-the-internet-sometimes-lie/) with other topics and it is not unreasonable to think this could be a factor here too.

# 5. The technology isn't here yet

The kind of technology that would be needed for Instagram to process the audio and extract the ad-relevant bits is simply not here yet. Yes, we have machine learning techniques that can identify speech in some restricted domains (for example, things like voice commands or [some phone conversations](https://arstechnica.com/gadgets/2018/06/google-duplex-is-calling-we-talk-to-the-revolutionary-but-limited-phone-ai/)), but extracting information relevant for ads from this audio remains, as of now, a mostly intractable problem. Audio processing in other services like Amazon's Alexa or Google's "Google Home" sometimes have serious trouble identifying audio with a lot of background noise or [unusual accents](https://www.washingtonpost.com/graphics/2018/business/alexa-does-not-understand-your-accent/?noredirect=on&utm_term=.72afda3e402b) so it would make little sense that the technology that Instagram could have would be much better than that.

There's also a problem of scale: this kind of audio analysis would have to be made by Instagram servers and the amount of memory needed to transmit all this audio [would exceed](https://www.wired.com/story/facebooks-listening-smartphone-microphone/) the current estimated Facebook servers capacity. 

# 6. They don't need to do it

[Facebook](https://www.eff.org/es/deeplinks/2018/04/facebook-doesnt-need-listen-through-your-microphone-serve-you-creepy-ads), Instagram and most privately-owned social networks already gather massive amounts of data about you in formats that are way more tractable than random audio. This information already creates a scaringly accurate profile of you without needing to resort to microphone tapping. Extra information like this [helps a little but apparently not enough](https://www.wired.com/story/facebooks-listening-smartphone-microphone/).

# Conclusion

In the end, this commonly shared conspiracy theory probably stems from a combination of cognitive biases, misconceptions about the state of the art of machine learning and our inability to grapple with the enormous amount of people that use social networks every day. This does not mean Instagram doesn't have questionable practices regarding privacy[^uncomf], of course, but, as far as we can tell, they probably don't listen to you.

[^uncomf]: If you still feel uncomfortable about this consider [checking your privacy settings](https://ssd.eff.org/en/module/protecting-yourself-social-networks), installing [Privacy Badger](https://www.eff.org/es/node/99095) or maybe even using [alternative services](https://pixelfed.org/) that are privacy-respecting.
