(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"maths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maths"}},[t._v("#")]),t._v(" Maths")]),t._v(" "),a("p",[t._v("The library supports a multitude of mathematical expressions, with quite a lot of flexibility.")]),t._v(" "),a("h2",{attrs:{id:"operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operators"}},[t._v("#")]),t._v(" Operators")]),t._v(" "),a("p",[t._v("You can use mathematical operators to carry out equations with roll results")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("d6*5     // roll a 6 sided die and multiple the result by 5\n2d10/d20 // roll a 10 sided die 2 times and add the results together, then roll a 20 sided dice and divide the two totals\n3d20^4   // roll a 20 sided die 3 times and raise the result to the power of 4 (Exponent)\n3d20**4  // Equivalent to above (Exponent)\nd15%2    // roll a 15 sided die and return the remainder after division (Modulus)\n")])])]),a("p",[t._v("You can even use them to determine the number of dice to roll, or how many sides a die should have:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(4-2)d10 // subtract 2 from 4 (`2`) and then roll a 10 sided dice that many times\n3d(2*6)  // multiple 2 by 6 (`12`) and roll a dice with that many sides 3 times\n")])])]),a("DiceRoller",{attrs:{notation:"3d(2*6)"}}),a("h2",{attrs:{id:"parenthesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parenthesis"}},[t._v("#")]),t._v(" Parenthesis")]),t._v(" "),a("p",[t._v("Parenthesis are recognised anywhere in notations to group sections and define the order of operations, as you would expect:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1d6+2*3: [4]+2*3 = 10\n(1d6+2)*3: ([4]+2)*3 = 18\n")])])]),a("DiceRoller",{attrs:{notation:"(1d6+2)*3"}}),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("p",[t._v("You can also use an array of mathematical formulas and functions.")]),t._v(" "),a("p",[t._v("It works with the following "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#Static_methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javascript math functions"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("p",[a("code",[t._v("abs")]),t._v(", "),a("code",[t._v("ceil")]),t._v(", "),a("code",[t._v("cos")]),t._v(", "),a("code",[t._v("exp")]),t._v(", "),a("code",[t._v("floor")]),t._v(", "),a("code",[t._v("log")]),t._v(", "),a("code",[t._v("max")]),t._v(", "),a("code",[t._v("min")]),t._v(", "),a("code",[t._v("pow")]),t._v(", "),a("code",[t._v("round")]),t._v(", "),a("code",[t._v("sign")]),t._v(", "),a("code",[t._v("sin")]),t._v(", "),a("code",[t._v("sqrt")]),t._v(", "),a("code",[t._v("tan")])]),t._v(" "),a("p",[t._v("Some examples:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("round(4d10/3): round([3, 6, 1, 1]/3) = 3.7\nfloor(4d10/3): round([3, 6, 1, 1]/3) = 3.6\nceil(4d10/3): round([3, 6, 1, 1]/3) = 3.7\nabs(4d10-25): abs([3, 6, 1, 1]-25) = 14\nsqrt(4d10/3): sqrt([3, 6, 1, 1]) = 1.91\nmin(4d6, 2d10): min([3, 4, 1, 5], [10, 6]) = 13\n")])])]),a("DiceRoller",{attrs:{notation:"min(4d6, 2d10)"}}),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If we're missing a math function that you want, "),a("a",{attrs:{href:"https://github.com/GreenImp/rpg-dice-roller/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("let us know"),a("OutboundLink")],1),t._v("!")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);