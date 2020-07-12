(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{376:function(e,t,a){"use strict";a.r(t);var o=a(18),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modifiers"}},[e._v("#")]),e._v(" Modifiers")]),e._v(" "),a("p",[e._v("Modifiers a special flags that can change the value of dice rolls, their appearance, order, and more.")]),e._v(" "),a("p",[e._v("You can generally combine multiple modifiers of different types, and they'll work together.")]),e._v(" "),a("p",[e._v("For example, This will both "),a("a",{attrs:{href:"#exploding-cp"}},[e._v("Explode")]),e._v(" any maximum rolls, and "),a("a",{attrs:{href:"#keep-kn-khn-kln"}},[e._v("Keep")]),e._v(" only the highest 2 rolls:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("5d10!k2\n")])])]),a("p",[e._v("We have tried to cover all the commonly used modifiers. "),a("a",{attrs:{href:"https://github.com/GreenImp/rpg-dice-roller/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let us know"),a("OutboundLink")],1),e._v(" if we've missed one that you use!")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Modifier order")]),e._v(" "),a("p",[e._v("Modifiers always run in a specific order, regardless of the order you specify them in.\nThis is determined by the modifier's "),a("code",[e._v("order")]),e._v(" property, and works in ascending order.")]),e._v(" "),a("p",[e._v("These two are equivalent, and the "),a("a",{attrs:{href:"#exploding-cp"}},[e._v("explode modifier")]),e._v(" will always run before the "),a("a",{attrs:{href:"#drop-dn-dhn-dln"}},[e._v("drop modifier")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("4d6!d1\n4d6d1!\n")])])])]),e._v(" "),a("h2",{attrs:{id:"exploding-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exploding-cp"}},[e._v("#")]),e._v(" Exploding ("),a("code",[e._v("!")]),e._v(" / "),a("code",[e._v("!{cp}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 1")]),e._v(" "),a("p",[e._v("The exploding dice mechanic allows one or more dice to be re-rolled (Usually when it rolls the highest possible number on the die), with each successive roll being added to the total.")]),e._v(" "),a("p",[e._v("To explode a die, add an exclamation mark after the die notation: "),a("code",[e._v("4d10!")])]),e._v(" "),a("p",[e._v("Each exploded die shows as a separate roll in the list, like so:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!: [4, 6!, 6!, 2] = 18\n")])])]),a("p",[e._v("The second die rolled the highest value, and so it exploded - we roll again. The re-rolled die also exploded, so we roll a fourth time. The fourth roll, however, did not explode, so we stop rolling.")]),e._v(" "),a("p",[e._v("If you want to change the number that a die will explode on, you can use a "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Point")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!=5   // explode on any rolls equal to 5\n2d6!>4   // explode on any rolls greater than 4\n4d10!<=3 // explode on any roll less than or equal to 3\n")])])]),a("p",[e._v("Read more about "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Points below")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("`!=` compare point with exploding dice")]),e._v(" "),a("p",[e._v("You can't have a die that only explodes if you "),a("em",[e._v("don't")]),e._v(" roll a specific number:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!!=4\n")])])]),a("p",[e._v("This notation will instead create a "),a("a",{attrs:{href:"#compounding-cp"}},[e._v("compound roll")]),e._v(" if you roll a 4.")])]),e._v(" "),a("DiceRoller",{attrs:{notation:"4d10!<=3"}}),a("h3",{attrs:{id:"compounding-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compounding-cp"}},[e._v("#")]),e._v(" Compounding ("),a("code",[e._v("!!")]),e._v(" / "),a("code",[e._v("!!{cp}")]),e._v(")")]),e._v(" "),a("p",[e._v("Sometimes, you may want the exploded dice rolls to be combined together into a single roll. In this situation, you can compound the dice by using two exclamation marks: "),a("code",[e._v("4d10!!")])]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!: [4, 6!, 6!, 2] = 18 // exploding re-rolls\n2d6!!: [4, 14!!] = 18     // compounding combines re-rolls\n")])])]),a("p",[e._v("You can also use "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Points")]),e._v(" to change when a die will compound:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!!=5   // compound on any rolls equal to 5\n2d6!!>4   // compound on any rolls greater than 4\n4d10!!<=3 // compound on any roll less than or equal to 3\n")])])]),a("DiceRoller",{attrs:{notation:"4d10!!<=3"}}),a("h3",{attrs:{id:"penetrating-p-p-p-cp-p-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#penetrating-p-p-p-cp-p-cp"}},[e._v("#")]),e._v(" Penetrating ("),a("code",[e._v("!p")]),e._v(" / "),a("code",[e._v("!!p")]),e._v(" / "),a("code",[e._v("!p{cp}")]),e._v(" / "),a("code",[e._v("!!p{cp}")]),e._v(")")]),e._v(" "),a("p",[e._v("Some exploding dice system use a penetrating rule.")]),e._v(" "),a("p",[e._v("Taken from the Hackmaster Basic rules:")]),e._v(" "),a("blockquote",[a("p",[e._v("Should you roll the maximum value\non this particular die, you may re-roll and add the result of\nthe extra die, less one point, to the total (penetration can\nactually result in simply the maximum die value if a 1 is subsequently\nrolled, since any fool knows that 1-1=0). This\nprocess continues indefinitely as long as the die in question\ncontinues to come up maximum (but there’s always only a\n–1 subtracted from the extra die, even if it’s, say, the third\ndie of penetration)")])]),e._v(" "),a("p",[e._v("So, if I rolled "),a("code",[e._v("1d6")]),e._v(" (penetrating), and got a 6, I would roll another "),a("code",[e._v("d6")]),e._v(", subtracting 1 from the result. If that die rolled a 6 (before the -1) it would also penetrate, and so on.")]),e._v(" "),a("p",[e._v("The syntax for penetrating is very similar to exploding, but with a lowercase 'p' appended: "),a("code",[e._v("2d6!p")]),e._v(".")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Actual rolls are [6, 6, 6, 4, 1]\n2d6!p: [6!p, 5!p, 5!p, 3, 1] = 20\n")])])]),a("p",[e._v("The first roll exploded (Rolled the highest number on the die), so we rolled again and subtracted 1 from the re-roll. The second and third rolls also exploded and were re-rolled, so we subtract 1 from each.")]),e._v(" "),a("p",[e._v("Remember that we subtract 1 from penetrated rolls, which is why we show "),a("code",[e._v("5")]),e._v("s and a "),a("code",[e._v("3")]),e._v(" instead of "),a("code",[e._v("6")]),e._v("s and a "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("p",[e._v("You can also compound penetrating dice, like so: "),a("code",[e._v("2d6!!p")])]),e._v(" "),a("p",[e._v("You can also use "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Points")]),e._v(" to change when a dice will penetrate:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!p=5   // penetrate on any rolls equal to 5\n2d6!!p>4  // penetrate and compound on any rolls greater than 4\n4d10!p<=3 // penetrate on any roll less than or equal to 3\n")])])]),a("DiceRoller",{attrs:{notation:"4d10!p<=3"}}),a("h2",{attrs:{id:"re-roll-r-ro-r-cp-ro-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#re-roll-r-ro-r-cp-ro-cp"}},[e._v("#")]),e._v(" Re-roll ("),a("code",[e._v("r")]),e._v(" / "),a("code",[e._v("ro")]),e._v(" / "),a("code",[e._v("r{cp}")]),e._v(" / "),a("code",[e._v("ro{cp}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 2")]),e._v(" "),a("p",[e._v("This will re-roll a die that rolls the lowest possible number on a die (Usually a 1). It will keep re-rolling until a number greater than the minimum is rolled, disregarding any of the previous rolls.")]),e._v(" "),a("p",[e._v("This is similar to "),a("a",{attrs:{href:"#exploding-cp"}},[e._v("Exploding")]),e._v(", but explode will keep the previous rolls and add them together.")]),e._v(" "),a("p",[e._v("To re-roll, add an "),a("code",[e._v("r")]),e._v(" after the dice notation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// roll 1 d6 and re-roll if the result is 1 (and again each time a 1 is rolled)\nd6r\n")])])]),a("p",[e._v("If you only want to re-roll once, even if the second roll also rolls the minimum value, you can use the "),a("code",[e._v("ro")]),e._v(" notation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// roll 1 d6 and re-roll if the result is 1. Don't re-roll again, even if the second roll is also a 1\nd6ro\n")])])]),a("p",[e._v("If you want to change the number that a dice will re-roll on, you can use a "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Point")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6r=5   // re-roll on any rolls equal to 5\n2d6ro>4   // re-roll once on any roll greater than 4\n4d10r<=3 // re-roll on any roll less than or equal to 3\n")])])]),a("p",[e._v("Read more about "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Points below")]),e._v(".")]),e._v(" "),a("DiceRoller",{attrs:{notation:"4d10r<=3"}}),a("h2",{attrs:{id:"keep-k-n-kh-n-kl-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-k-n-kh-n-kl-n"}},[e._v("#")]),e._v(" Keep ("),a("code",[e._v("k{n}")]),e._v(" / "),a("code",[e._v("kh{n}")]),e._v(" / "),a("code",[e._v("kl{n}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 3")]),e._v(" "),a("p",[e._v("The keep modifier allows you to roll a collection of dice but to disregard all except for the highest or lowest result(s).\nIt is the opposite of the "),a("a",{attrs:{href:"#drop-dn-dhn-dln"}},[e._v("Drop modifier")]),e._v(".")]),e._v(" "),a("p",[e._v("The notation of the keep modifier is a lowercase "),a("code",[e._v("k")]),e._v(', followed by the end that should be dropped ("h" = "highest", "l" = "lowest"), and then the number of dice to drop.')]),e._v(" "),a("p",[e._v('The "end" is optional and, if omitted, will default to '),a("em",[e._v("highest")]),e._v(".")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("4d10kh2 // roll a d10 4 times and keep the highest 2 rolls\n4d10k2  // equivalent to the above\n4d10kl1 // roll a d10 4 times and keep the lowest roll\n")])])]),a("p",[e._v('When outputting the roll, the kept rolls aren\'t modified, but the dropped rolls are given the "d" flag:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("6d8k3: [3d, 6, 7, 2d, 5, 4d] = 9\n")])])]),a("DiceRoller",{attrs:{notation:"6d8k3"}}),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Using Drop and Keep modifiers together")]),e._v(" "),a("p",[e._v("The keep and "),a("a",{attrs:{href:"#drop-dn-dhn-dln"}},[e._v("drop")]),e._v(" modifiers work really well together, but there are some caveats.\nThey both look at the entire dice pool. So if a roll has been dropped, it will be still be included in the list of possible rolls to drop.")]),e._v(" "),a("p",[e._v("This means that using keep and drop modifiers together can override each other.")]),e._v(" "),a("p",[e._v("For example, the following will drop all the rolls:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("3d10k1dh1: [7d, 1d, 2d] = 0\n")])])]),a("p",[e._v("The is because the "),a("code",[e._v("k1")]),e._v(" will drop the second and third dice, and the "),a("code",[e._v("dh1")]),e._v(" will drop the first dice.")]),e._v(" "),a("p",[e._v("This (perhaps more expectedly) will only keep the highest dice:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("3d10k1d1: [6d, 1d, 9] = 9\n")])])]),a("p",[e._v("The "),a("code",[e._v("k1")]),e._v(" will drop the first and second rolls, and the "),a("code",[e._v("d1")]),e._v(" will also drop the first roll.")])]),e._v(" "),a("h2",{attrs:{id:"drop-d-n-dh-n-dl-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drop-d-n-dh-n-dl-n"}},[e._v("#")]),e._v(" Drop ("),a("code",[e._v("d{n}")]),e._v(" / "),a("code",[e._v("dh{n}")]),e._v(" / "),a("code",[e._v("dl{n}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 4")]),e._v(" "),a("p",[e._v('Sometimes you may want to roll a certain number of dice, but "drop" or remove high or low rolls from the results.\nIt is the opposite of the '),a("a",{attrs:{href:"#keep-kn-khn-kln"}},[e._v("Keep modifier")]),e._v(".")]),e._v(" "),a("p",[e._v("The notation of the drop modifier is a lowercase "),a("code",[e._v("d")]),e._v(', followed by the end that should be dropped ("h" = "highest", "l" = "lowest"), and then the number of dice to drop.')]),e._v(" "),a("p",[e._v('The "end" is optional and, if omitted, will default to '),a("em",[e._v("lowest")]),e._v(".")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("4d10dl2    // roll a d10 4 times and drop the lowest 2 rolls\n4d10d2     // equivalent to the above\n4d10dh1    // roll a d10 4 times and drop the highest roll\n")])])]),a("p",[e._v('When outputting the roll, the dropped rolls are given the "d" flag:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("6d8dh3: [3, 6d, 7d, 2, 5d, 4] = 9\n")])])]),a("p",[e._v('You can also use "drop lowest" and "drop highest" modifiers together:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// roll a d10 4 times and drop the highest and lowest rolls\n4d10dh1dl2: [5, 3d, 7, 8d] = 12\n")])])]),a("DiceRoller",{attrs:{notation:"4d10dh1dl2"}}),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Using Drop and Keep modifiers together")]),e._v(" "),a("p",[e._v("See the note in the "),a("a",{attrs:{href:"#keep-kn-khn-kln"}},[e._v("Keep modifier section")]),e._v(" regarding using the two together")])]),e._v(" "),a("h2",{attrs:{id:"target-success-dice-pool-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-success-dice-pool-cp"}},[e._v("#")]),e._v(" Target success / Dice pool ("),a("code",[e._v("{cp}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 5")]),e._v(" "),a("p",[e._v("Some systems use dice pool, or success counts, whereby the total is equal to the quantity of dice rolled that meet a fixed condition, rather than the total value of the rolls.")]),e._v(" "),a("p",[e._v("This can be achieved by adding a "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Point")]),e._v(" notation directly after the die notation.")]),e._v(" "),a("p",[e._v('For example, a "pool" of 10 sided dice where you count the number of dice that roll an 8 or higher as "successes":')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("5d10>=8\n")])])]),a("p",[e._v("You can use any valid "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Point")]),e._v(" notation.")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6=6: [4, 6*] = 1                   // only a roll of 6 is a success\n4d3>1: [1, 3*, 2*, 1] = 2            // greater than a 1 is a success\n4d3<2: [1*, 3, 2, 1*] = 2            // less than a 2 is a success\n5d8>=5: [2, 4, 6*, 3, 8*] = 2        // greater than or equal to 5 is a success\n6d10<=4: [7, 2*, 10, 3*, 3*, 4*] = 4 // less than or equal to 4 is a success\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Not equal to")]),e._v(" "),a("p",[e._v("You cannot count success for any number that is "),a("em",[e._v("not")]),e._v(" equal to a certain value, like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!=3\n")])])]),a("p",[e._v("Because it will conflict with the "),a("a",{attrs:{href:"#exploding-cp"}},[e._v("Explode")]),e._v(" modifier, and it will instead explode on any roll of "),a("code",[e._v("3")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Modifiers with compare points")]),e._v(" "),a("p",[e._v("Another caveat is that the target modifier cannot directly follow any modifier that uses "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Points")]),e._v(",\notherwise the Target modifier will be instead be used as the "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Points")]),e._v(" for the modifier:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6!>3   // explode on any roll greater than 3\n")])])]),a("p",[e._v("But you can work around this by specifying the Target compare point first:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2d6>3!   // explode on a roll of 6, greater than 3 is a success\n2d6>3!<4 // explode on any roll greater than 4, greater than 3 is a success\n")])])])]),e._v(" "),a("DiceRoller",{attrs:{notation:"6d10<=4"}}),a("h2",{attrs:{id:"target-failures-dice-pool-f-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-failures-dice-pool-f-cp"}},[e._v("#")]),e._v(" Target Failures / Dice Pool ("),a("code",[e._v("f{cp}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 5")]),e._v(" "),a("p",[e._v("Sometimes, when counting success, you also need to consider failures. A failure modifier "),a("em",[e._v("must")]),e._v(" directly follow a Success modifier, and works in much the same way.")]),e._v(" "),a("p",[e._v("For each failure counted, it will "),a("em",[e._v("subtract 1")]),e._v(" from the total number of success counted.")]),e._v(" "),a("p",[e._v("The Failure modifier is a "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Point")]),e._v(', preceded with the lowercase letter "f":')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// greater than 4 is success, less than 3 is failure\n4d6>4f<3: [2_, 5*, 4, 5*] = 1\n")])])]),a("DiceRoller",{attrs:{notation:"4d6>4f<3"}}),a("h2",{attrs:{id:"critical-success-cs-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#critical-success-cs-cp"}},[e._v("#")]),e._v(" Critical Success ("),a("code",[e._v("cs{cp}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 6")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This is purely aesthetic and makes no functional difference to the rolls or their values.")])]),e._v(" "),a("p",[e._v("When a die rolls the highest possible value, such as rolling a 20 on a d20, this is called a critical success.")]),e._v(" "),a("p",[e._v("However, sometimes you want a critical success to be on a different value, or a range, such as 18-20 on a d20.")]),e._v(" "),a("p",[e._v("To specify what is considered as a critical success, add "),a("code",[e._v("cs")]),e._v(" and a "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Point")]),e._v(", after the die notation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// roll a d10 4 times, anything greater than 7 is a critical success\n4d10cs>7\n")])])]),a("p",[e._v("The roll result output will look something like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// the rolls of 20 and 18 are critical successes\n5d20cs>=16: [3, 20**, 18**, 15, 6] = 62\n")])])]),a("DiceRoller",{attrs:{notation:"5d20cs>=16"}}),a("h2",{attrs:{id:"critical-failure-cf-cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#critical-failure-cf-cp"}},[e._v("#")]),e._v(" Critical Failure ("),a("code",[e._v("cf{cp}")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 7")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This is purely aesthetic and makes no functional difference to the rolls or their values.")])]),e._v(" "),a("p",[e._v("When a die rolls the lowest possible value, such as rolling a 1 on a d20, this is called a critical failure.")]),e._v(" "),a("p",[e._v("However, sometimes you want a critical failure to be on a different value, or a range, such as 1-3 on a d20.")]),e._v(" "),a("p",[e._v("To specify what is considered as a critical failure, add "),a("code",[e._v("cf")]),e._v(" and a "),a("a",{attrs:{href:"#compare-point"}},[e._v("Compare Point")]),e._v(", after the die notation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// roll a d10 4 times, anything less than 3 is a critical failure\n4d10cf<3\n")])])]),a("p",[e._v("The roll result output will look something like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// the rolls of 3 and 6 are critical failures\n5d20cf<=6: [3__, 20, 18, 15, 6__] = 62\n")])])]),a("DiceRoller",{attrs:{notation:"5d20cf<=6"}}),a("h2",{attrs:{id:"sorting-s-sa-sd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sorting-s-sa-sd"}},[e._v("#")]),e._v(" Sorting ("),a("code",[e._v("s")]),e._v(" / "),a("code",[e._v("sa")]),e._v(" / "),a("code",[e._v("sd")]),e._v(")")]),e._v(" "),a("p",[a("strong",[e._v("Order:")]),e._v(" 8")]),e._v(" "),a("p",[e._v("You can sort the dice rolls, so that they are displayed in numerical order by appending the "),a("code",[e._v("s")]),e._v(" flag after the dice notation.")]),e._v(" "),a("p",[e._v("The default order is ascending, but you can specify the sort order using "),a("code",[e._v("sa")]),e._v(" and "),a("code",[e._v("sd")]),e._v(" for ascending and descending respectively:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("4d6: [4, 3, 5, 1]   // no sorting\n4d6s: [1, 3, 4, 5]  // default sort the results ascending\n4d6sa: [1, 3, 4, 5] // sort the results ascending\n4d6sd: [5, 4, 3, 1] // sort the results descending\n")])])]),a("DiceRoller",{attrs:{notation:"4d6sd"}}),a("h2",{attrs:{id:"compare-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compare-point"}},[e._v("#")]),e._v(" Compare point")]),e._v(" "),a("p",[e._v("Many modifiers perform an action when the die rolls either the highest or lowest possible number. Sometimes you may want the modifier to execute on different values, and this is what Compare Points are for.")]),e._v(" "),a("p",[e._v("A compare point is a comparative operator, followed by the number to match against (e.g. "),a("code",[e._v("=8")]),e._v(")")]),e._v(" "),a("p",[e._v("The following are valid comparative operators:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("=   // equal to\n!=  // not equal to\n<   // less than\n>   // greater than\n<=  // less than or equal to\n>=  // greater than or equal to\n")])])]),a("p",[e._v("Wherever you can use compare points, the notation is the same. So if you wanted to check if a number is "),a("em",[e._v('"greater than or equal to 5"')]),e._v(", the notation would look like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(">=5\n")])])]),a("p",[e._v("Here are some examples with full notation strings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("d6!=3    // roll a d6 and explode any roll equal to 3\nd10!>=5  // roll a d10 and explode on any roll greater than or equal to 5\nd6!!>4   // roll a d6 and compound only on rolls greater than 4\nd4r<3    // roll a d4 and re-roll anything less than 3\n")])])]),a("DiceRoller",{attrs:{notation:"d4r<3"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);