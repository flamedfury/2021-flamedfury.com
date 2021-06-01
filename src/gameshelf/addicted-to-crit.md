---
title: "addicted to crit archives"
description: the addicted to crit archives
layout: page
permalink:  "{{ page.filePathStem }}.html"
---

Addicted to Crit was a version of my weblog during 2008. I was playing World of Warcraft: The Burning Crusade on the Khaz'Gorath realm at the time.

This is an interesting look back at that time and how I never got to complete the raid tiers.

Still, it was a funtastic time of my life.

## About

Lunchcuttah of [Darnassus](https://web.archive.org/web/20081014205826/http://www.wowwiki.com/Darnassus) resides on the Oceanic server Khaz’Goroth.

He is a hunter trained in the art of [Survival](https://web.archive.org/web/20081014205826/http://www.wowhead.com/?talent=cZVVbRVzhZIG0MucMhqhh).

He is a member of the guild Zenith, who are currently working through Coilfang Reservoir: Serpentshrine Cavern and Tempest Keep, The Eye. They have also traveled back in time to assist the Alliance and Horde forces in the battle of [Mount Hyjal](https://web.archive.org/web/20081014205826/http://www.wowwiki.com/Battle_for_Mount_Hyjal).

Lunchcuttah lets know beast go to waste, skinning their corpses, continuing their use in his trade of leatherworking.

When he is not adventuring with his guild or his [faithful companions](#the-stables), he can be found in the many water areas of outlands spending his time  at a slow pace fishing. Some would say he is rather domesticated, due to his prowess as a master cook, able to prepare a meal out of anything he comes across.

## Blog

{% include "partials/_addicted-to-crit.njk" %}

## Behind the Lines

![May Interface](https://web.archive.org/web/20081014205623im_/http://critaddict.shadyacres.co.nz/assets/ui/LUNCHuiMAY.jpg#center)

### Adons Used:

#### Raid
- Omen Threat Meter
- Recount
- Big Wigs

#### Visual
- X-Pearl Unit Frames
- Bongos2 Action Bars
- ChatMod
- Fubar + Various Modules

## Macros

> *After finishing an intense training session with Jeen’ra Nightrunner, he thinks to himself,*
>
> *“how will I use all these abilities most effectively?”*
>
> *an idea comes to him…*

#### Tranquilizing Shot
 Let me start off with one of the hunter’s least used abilities. [Tranquilizing Shot](https://web.archive.org/web/20081014205716/http://wowhead.com/?spell=19801). Only usable on a handful of mobs and boss’s in the game, I was caught  off guard in Zul’Aman one night when asked to tranq  the Lynx boss. I  later keybound this macro witch allows tranq shot to cancel whatever you are casting and dispel the mob’s frenzy affect.

``` yaml
#showtooltip Tranquilizing Shot
/stopcasting
/cast Tranquilizing Shot
```

#### Raptor Strike / Wing Clip
 To save on button space, hunter’s generally combine these two together. This one will line up a [Raptor Strike](https://web.archive.org/web/20081014205716/http://wowhead.com/?spell=27014) and [Wing Clip](https://web.archive.org/web/20081014205716/http://wowhead.com/?spell=14268) them, allowing you to (hopefully) get back into range.

``` yaml
#showtooltip Raptor Strike
/cast Raptor Strike
/cast Wing Clip
/stopcasting
```

#### Misdirect to Focus
 One of the hunter’s main responsibilities in the raid environment is to [Misdirect](https://web.archive.org/web/20081014205716/http://wowhead.com/?spell=34477) to the raid’s tanks. 

``` yaml
use: /focus tank name
```

to set the tank as your focus. Then whenever you need to Misdirect to them, with your mob targeted you can hit the key bound to the macro  below and it will Misdirect to them without having to target them.

``` yaml
/cast [target=focus] Misdirection
```

#### Ruthless Aggression
 This one will unleash your full power at the press of one button. Bound  somewhere with ease of access, will pop all your DPS upper abilities.  You can chop and change the trinket names etc for your trinkets and  racial abilities.

``` yaml
/stopcasting
/use Drums of War
/stopcasting
/use Bladefist’s Breadth
/stopcasting
/use Bloodlust Brooch
/stopcasting
/cast Rapid Fire
```

#### Feign Death
 One of the most (in my opinion) hunter macros out there. During trash,  boss, or even extreme solo fights, you want to dump your agro (pending  resists). This one will stop what you are casting and you will [Feign Death](https://web.archive.org/web/20081014205716/http://wowhead.com/?spell=5384), ready to start DPSing again.

``` yaml
#showtooltip Feign Death
/stopcasting
/cast Feign Death
```

![just kidding guys](https://web.archive.org/web/20081014205716im_/http://critaddict.shadyacres.co.nz/assets/macros/feigndeath.png#center)

## <a id="the-stables"></a>The Stables

>The Stable Master granted him access to the stables, as he  briskly walks down the long winded path past countless stalls the sounds of animals settling in for the night yearning to be fed surround him. A short while later he arrives at his stall where he is greeted warmly by his troop of ever faithful comapnions..

![Tamaska the Mighty](https://web.archive.org/web/20081014205640im_/http://critaddict.shadyacres.co.nz/assets/stable/tam.png)
**Tamaska** is a Black Ravager Mastiff, originally sighted roaming with a pack of  Black Ravager wolves in the hills of Duskwood. I stalked the pack for  hours looking for an oppertunity where she would stray from the others.  As they passed near a break in the rocky hills leading towards the  Twilight Grove, something stirred the rest of the pack and they started  to flee, Tamaska (a name unbenknown to her at this point) delayed in the retreat with them. This was the oppertunity I had been waiting for. A  trap was set at a distance, and with a quick distraction I called out to her and started to talk to her in the way that only hunters are able to talk with animals. Moments later I had convinced her to leave her pack  and join me on my adventures. I bestowed upon her the name Tamaska  meaning *mighty wolf*, which she accepted with a howl into the sky. Tamaska has fought with me faithfully ever since.

![Tanesha the Feirce](https://web.archive.org/web/20081014205640im_/http://critaddict.shadyacres.co.nz/assets/stable/tan.png)
**Tanesha**, once known as Shy-Rotam led the Frostsaber’s of Winterspring. While  doing my time in Winterspring, a Tauren by the name of Storm Shadowhoof  tasked me to tracking down Shy-Rotam and slay her to prove my strength  and gain respect. Always up for a challenge, I stepped up and set of on  my mission.

Hours had passed but I eventually arrived at Frostsaber Rock. Storm  had advised that I would have slay Frostsaber’s and gather their sacred  meat to be able to summon Shy-Rotam into the open. With this complete I  gathered the meat and placed on an outcrop below the mighty rock of the  Frostsaber’s. Shy-Rotam did appear, a look of anger in her eyes, I could also sense an air of despair around her. I halted my oncoming attack,  and sympathized with her as I learned of her plight. Shadowhoof had been sending adventurers this way to slay her for years. A pact was then  made that to ease the suffering of her pride and for her to avoid the  endless hunt set upon by Shadowhoof. She would join my adventures by my  side, known now as Tanesha.

![Wind Serpent](https://web.archive.org/web/20081014205640im_/http://critaddict.shadyacres.co.nz/assets/stable/winds.png)
This is a **Wind Serpent**, called Wind Serpent. He has no story to go with him. All I can say is  that he suddenly attached himself and started following me around a  while ago, whilst out in the Vortex Fields. We have a bare minimum of  communication, altho he seems to know what to do when he is with me. He  is a funny sort, flaps around and breathes his lightning. I’m not sure  what his deal is, but he is trustworthy and does his job. I am usually  able to convince him to follow me to the most dangerous of places, where I like to keep Tan and Tam away from. I wonder if one day that he might develop a personality, one can only hope…

<a href="world-of-warcraft.html">Back to my World of Warcraft page</a>.