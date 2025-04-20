+++
image = "img/portfolio/Islamic_geometry_1.jpg"
showonlyimage = false
date = "2016-11-05T19:44:32+05:30"
title = "PERIOD MOON CALENDAR"
tags = ["patterns", "electronics", "folk art"]
draft = false
weight = 2
+++

A period and moon phase tracking monthly calendar based on Islamic geometry patterns.
<!--more-->

 This data viz project was born out of anger, post the Roe vs. Wade legislation (June 2022, USA), where people who menstruate were advised to back up, delete, and hide their period data from apps, doctors, and even their partners. I could no longer let the patriarchal control over periods dictate how I visualise and perceive my body’s rhythms. 
 
 Menstrual rhythms are as mundane and beautiful as observing the moon as it cycles through its phases. To drive home this beautiful analogy, I worked with Islamic geometry’s cyclical and geometric elements to speculate on my body's rhythms and the moon’s cycles through making and coding.

![islamic geometry](/img/portfolio/Islamic_geometry_1.jpg)

The printed circuit board is made by the founder of Solder Party, [@arturo182](https://bsky.app/profile/did:plc:rxfz3hrx3feqrk5g6cuukfsj), and it uses the **2040 Stamp Round Carrier board** with CircuitPython to program the LEDs in delectable twilight colours (330019 - period, 190033 - moon). Each circular unit of 10 LEDs is programmed as a single unit. There are 30 units in total (6x5 grid) for 30 days in a month (lunar months always alternate between 29-30 days).

![islamic geometry](/img/portfolio/Islamic_geometry_3.jpg)

Seeing my period days overlap with the moon phases on a visual display matrix gives me a sense for when my next cycle will arrive.  A code snippet for a single month’s tracking looks like this ([see code in Github](https://github.com/anu1905/Islamic-Geometry/blob/main/code.py)):

show_firstquarter(2, 0x190033)

show_fullmoon(9, 0x190033)

period(14, 0x330019)

show_thirdquarter(15, 0x190033)

period(16, 0x330019)

period(17, 0x330019)

period(18, 0x330019)

show_newmoon(24, 0x0F000F)

![islamic geometry](/img/portfolio/Islamic_geometry.gif)

In the image above, my period coincides with the third quarter of the moon, so I predict my future cycle happening a row above it, approximating to the next full moon. In this way, I use my self-knowledge to reprogram the calendar and prepare for the following months’ cycles. Accuracy is not crucial as I’m the only person programming and using the device in the privacy of my home. 

The Islamic pattern on the circuit board is based on a ten-pointed star grid (one LED for each star) made with a purple solder mask, white silkscreen, and gold for decorative illumination.

![islamic geometry](/img/portfolio/Islamic_geometry_4.jpg)

The 10-pointed star pattern is from a book I found in my late grandfather’s dusty old library when I last visited my parents in India. The book is called [Islamic Designs for Artists and Craftspeople](https://www.amazon.com/Islamic-Designs-Artists-Craftspeople-Pictorial/dp/048625819X) by Eva Wilson (Dover Publications).

![islamic geometry](/img/portfolio/Islamic_geometry_5.jpg)

Disclaimer:
I designed this device mainly for myself. I understand that bodies are different and that there are tradeoffs between individual needs for privacy and safety. On the one hand, this device is stand-alone and private, meaning that you can use it in the comfort of your home without requiring an Internet connection. On the other hand, the overt visual display means that other home inhabitants can see where you are in your cycle. Some may not feel safe displaying their cycle to family members or housemates.  I finally want to clarify that by making this project, I'm not pursuing pseudo scientific theory about syncing moon phases with menstrual cycles. It's simply interesting to put the cycles next to each other and marvel at them individually and together!


<!-- Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
2. Aliquam tincidunt mauris eu risus.

> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

## Header Level 2

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

* Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
* Aliquam tincidunt mauris eu risus.

When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then   -->
