(this.webpackJsonpkfrobotics=this.webpackJsonpkfrobotics||[]).push([[0],{33:function(e,a,s){},34:function(e,a,s){"use strict";s.r(a);var i=s(1),t=s.n(i),n=s(11),c=s.n(n),r=s(3),o=s(7),l=s(39),j=s(38),d=Object(l.a)({initialState:{lang:!0},actions:{changeLanguage:function(){return function(e){(0,e.setState)({lang:!(0,e.getState)().lang})}}},name:"lang"}),m=Object(j.a)(d),u=s(0),b=function(){var e=Object(i.useState)(!1),a=Object(r.a)(e,2),s=a[0],t=a[1],n=Object(i.useState)(!1),c=Object(r.a)(n,2),l=c[0],j=c[1],d=m(),b=Object(r.a)(d,2),h=b[0].lang,p=b[1].changeLanguage,x=function(){j(!l)},g=function(){t(!1),j(!1)},w=function(e){e.preventDefault()};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("header",{children:[Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(o.b,{to:"/",exact:!0,className:"nav-link",children:Object(u.jsxs)("div",{className:"logoBox",children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(u.jsx)("span",{children:"K.F. Robotics"})]})}),Object(u.jsx)("button",{onClick:x,className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarMenu","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse justify-content-end ".concat(l?"show":null),id:"navbarMenu",children:Object(u.jsxs)("ul",{className:"navbar-nav navbar-right",children:[Object(u.jsx)("li",{onClick:g,className:"nav-item",children:Object(u.jsx)(o.b,{to:"/",exact:!0,className:"nav-link",children:h?"Strona G\u0142\xf3wna":"Home"})}),Object(u.jsx)("li",{onClick:g,className:"nav-item",children:Object(u.jsx)(o.b,{to:"/aktualnosci",className:"nav-link",children:h?"Aktualno\u015bci":"News"})}),Object(u.jsxs)("li",{onClick:function(){t(!s)},className:"nav-item dropdown ".concat(s?"show":null),children:[Object(u.jsx)(o.b,{className:"nav-link dropdown-toggle show",to:"/dzialanosc",onClick:w,exact:!0,id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:h?"Dzia\u0142ano\u015b\u0107":"Projects"}),Object(u.jsxs)("div",{className:"dropdown-menu ".concat(s?"show":null),"aria-labelledby":"navbarDropdownMenuLink",children:[Object(u.jsx)(o.b,{onClick:x,to:"/gerrisasv",className:"nav-link",children:"GerrarisASV"}),Object(u.jsx)(o.b,{onClick:x,to:"/gerrisasvspecial",className:"nav-link",children:"GerrarisASV Special"}),Object(u.jsx)(o.b,{onClick:x,to:"/gerris1200",className:"nav-link",children:"Gerraris 1200"})]})]}),Object(u.jsx)("li",{onClick:g,className:"nav-item",children:Object(u.jsx)(o.b,{to:"/kontakt",className:"nav-link",children:h?"Kontakt":"Contact"})}),Object(u.jsx)("li",{onClick:function(){p(),g()},className:"nav-item",children:Object(u.jsxs)(o.b,{onClick:w,to:"/lang",className:"nav-link",children:[h?"English":"Polski",Object(u.jsx)("img",{src:h?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACGCAIAAAAZwSy6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABV1SURBVHhe7Z13fBTluse9n3u694972vXcU7zHIypgQSkiiJQDIlIEQUFEVDoYCEUMzUiXjkgV6SE0EQREURSkQ3rvCSGNVFLYBAJJ4L7r/tjPk2dKZmY3m83ufD/fPyTzPu88M/ll392dWfc+ExMTExMTJxLXc9iN+JS7Rpm2+Kv/eGhcw4pWJJSdDbn03085y/jewzGvhDmrjrKWXGn/sRtTMwrQCuHq6u3sEJSMbNUbaaCIDcF/aVMQeAjz6WfPkZAH289k7bpS9CHBG5Ihdo0mCLfzi1LHzGT9K5ky7IPqMgvSQLGPSH9/ISbWT0Jqbp+R61nTLhNNSPDsZDTp5H/wuwh0QCg9eSG6w2useSVzPtliq0IaKHRcTJfB5eGxtqEG8F95hHXvGrF7CR6cDMdXkIgne5SeOI+yOpNhM2/zPgzXz4HvIpp0+ogdRn2LfUvw1GQ4voIkDZl0u7AYlT+DNFBYjc00H/+aylso0klaRuFr4z5nB1OvYscSPC8ZTllBspd8hjIC0kBhZXaj2/W/fj4MdfpZsOZbdlT1J3YpwcOSIVYQ8VeHXRK0ryBhTbuWfHcaZbVBGiismHl17Q6U6ufrE9HNus1lh1cfYn8SPCkZjq8giQN9bl3NR6UEpIHC6qWmjPCrKr2OCXSSlVvy5sSt7CCdLnYmwTOSobaCPD+ANalk1oI1KFMAaaCwKWSNfKYXfR6rl6Ubj7Ojda7YjQQPSIZYQTKv1nqqaEP7ChL6r47XjvyIMmWQBgqbSMXs5Z9jGv0cPxP/RPd57LCdJfYhobEnw/EVJKHf6Mor2ahUBWmgpIyYxqZTMenNibfzZJ4EaaGg6Pq7U3ewg3eK2IGExpsMlRUkql1/1piSGR99gjINIA0U8VPtD03C8Gbdir85aZvOAKu2nmRnwXExtYRGmgyxguQVlmFqgvZfU8jf2xUdOIYybSANFNuGsjNBkS17sx2omDW/jmc0Kpy6lNzi5QXsdDgi5pXQGJPh+AoS12vYzZR0VGoGaaBgy9271aXXU4Z9wHajYkL/sRrXMCml12+MnrmLnRTDYlIJjSsZaitI236sGSWvzFiKMp0gDRRsucfVVVvZzlQMfaiD3kctyvrA0+zsGBPTSWhEyRArSHFpBaYjaF9Bgv6nVeGeIyjTD9JAwRZC6alLEU/3ZDtWMWPWclTq50JYWsteH7PTpFfMJaGxJENxBRk9g/WgZOyLb1XEJaPSEEgDZffhYGwkVBWVJL/zPtu9itbbfxLTUKyTGzdvT5i9j50sXWIiCe6fDLGCfP1jNGYhWFeQNn1ZA0o6cvuEIDEtr/MbK5EGiuhvyoIvMao2OSu3sCZUtN7+s8v47T9b9p2np0yXmEKCmydDrCCWikpMQdDxUvH3LfIDDqDMEIGHgv7r8UmiGaSBYuuy06CVCal5GE4Q4Y14qgdvSFlH8hsak9HmlUW2fnSJegnunAylFSRlpNa3l2I6DSqPjEelISbP32/vB2mg2Lfd33yiSBCKCKLd5KFTWFsqWm//MdpxdU3N+wu/tLekURRLcM9kiBXku9NxqCSIP8LIVn3YTpW87Dvn7p07qNRPXMrVFwauoF0hDRS6WShyhOra5CzfxJpTN2+L8dt/dh4MYl2pizIJbpgMsYLcul2NMoKuNxvzNu9FmSECDl76XTNf1hjSQGEjhB0HrohPycU0hJIfzoY/8RLrUsU0H/87VVUo1klMYk7bV5ewxpREjQR3S4biCjLcj+1Lyej2/S3BUag0hO/cL1hXNpEGChth8zePTRDJwmSEWzn5SUMmsXZVtN7+c0nm3RuNTF+i6SMLGC3BfZIhVpCTF5IwmmBdQVr2YjtSMnXsLMM32gliknKef20Za8wu0kBhI6gT536BWWuTvXQja1rdq+sCUKmffUdDWVdSMVSCmyRDrCAYVxtdbyrmrg9EmSG2f3nx149NYI1RkQYKG8Hs8Pry2OSrmJ5QcuxUePMXWfcqpozwq7aUo1gnSZfz2w9QDLsQ4yS4QzLmr/4WgwjWJ/XvTmXzKxnZus/186GoNMT42XtZV1KRBgobIfUXTXx2HLiInRAqM3OSBvuyw1DRevvPKZkVSiMzlx1mjdnFCAkNmwyxgpwLScUIgvWNAM1vMYunIIb/ogTRCdnt+i9ljcmKNFDYCCV958i/1shevIEdjLo5KzahUj9ffR/JurKJzRIaMBlKK0jOJzrePLz66TaUGWLLvvO/fMSHNaYk0kBhI1QUD+niJQN2Syg+eiK8aVd2VCpab/8pvIZinaRnFb0wcDlrDNskNFQylmz4HhsI1hXkba0XHCKe6lH6k8zjtHbe899DW6pTpIHCRtTptv0yHd+8nJk0aDw7PBXDm3VTur1dC+zDcPipBNcnQ6wgQZEy90aUnjiv/a3k5KGTq66VolI/UQnZz/ZbbD85GkUaKGyEFsUzGnRRm6yP17GDVDdr4VpU6ufbn2Lt/eBHElycDMUVZIWONwmzlxm/2Vawae+5/3z4PfuZ0S7SQGEjNNq23xKRTbRDuHboeNijXdjRqmi9/SdL5rWPFnLySzu/sVI0g39LcGUyVm6WuT/75wsLk9k8SooVueT4GVQaYowDN0MhDRQ2Qpdbv7iApgg3U9ITX/dhh61i6EMdRJ5QrB/xW8F/SXBZMnILZG7bLPnhnPa3jBMHjTd867UgMj6rdR8jFyPtIg0UNkKvPv570F1tMuetZgevbob/ClQ6D5clQ4pYFFi5imIVRpkhNu46w34pBkQaKGyEAVv1WRQRl4U2CUUHjoU16czOgopxPY3c2qpCgyRDrCBJQyayWiVDH+5YfNT4jfiCUdMD2a/DmEgDhY0w7OZ9Mh9iu5GQmjhgHDsdKgb/pU3h3q9R7DCuT4Z4oqD9reGEV8dUZhp8jiUQf42O3yhpF2mgsBGOOO7D3ei6NpmzP2EnRd30Dz5GpWO4OBnZSz5jJSpmzlmFMkM46+Zqu0gDhY1w0Kd7LgyPzUT7hMJ9R0P/1ZGdHRVj/j24IiYRxUZxWTJqyiu0XygI+Ue7ooMyb4VpZ4TfTnbaHRdpoLARTnHTnnM4CEJFbJJ4/GSnSd387fI3qGrEZcnIXRvABisZ32v4zbQMlOlH/NU590NcdpEGChvhLEfP2IWjody5kzFrOTtZ6qZNmG34tjaXJSN7kaaLR1dmLkOBIdbtdPIKQkUaKGyEE33ipfmhMTJ/HwW7D4f+swM7aypab2QKMXIjk/skI/iB1mI9xWhD1NOHxe0iDRQ2wulu3H0WB0coj4yP7zOCnT51cz+TexBSxU2SEdt9qHiNhqH6CYvNfPKl+eysOl2kgcJG1IfD/QLuSFaEO1VVV6YvYSdR3dRR02tu3ES9BtwhGelTHXqdtS7gFDuZ9STSQEELnojLkuEBIA0UbPFEzGRoB2mgYIsnYiZDO0gDBVs8ETMZ2kEaKNjiiZjJ0A7SQMEWT8RMhnaQBgq2eCJmMrSDNFCwxRMxk6EdpIGCLZ6ImQztIA0UccAeLPvtOiKb2cNEGijs+E29U6SBwkaYeqdIA4WNMPVOkQYKG2HqnSINFDbC1DtFGihshKl3ijRQ2AhT7xRpoLARpt4p0kBhI0y9U6SBwkaYeqdIA4WNMPVOkQYKG2HqnSINFDbC1DtFGihshKl3ijRQ2AhT7xRpoLARpt4p0kBhI0y9U6SBwkaYeqdIA4WNMPVOkQYKG2HqnSINFDbC1DtFGihshKl3ijRQ2AhT7xRpoLARpt4p0kBhI0y9U6SBkr14g+NmLVqvRVblAtnxO2J87+HscOpbdiz1KtJAwecaPRHzc63aQRoo2OKJmMnQDtJAwRZPxEyGdpAGCrZ4ImYytIM0ULDFEzGToR2kgYItnoiZDO0gDRRs8UTMZGgHaaBgiydiJkM7SAOF/Z/J68lm3eaERF1BF4awBEUqfXMdRkhowGRUxCXHdhvCZlAytuuQsnOhqCTkFpR1HbKKncl6EmmgsBH1oex3FeiiIPBQ1LN92Qm1i0ESGvwxQ/uXMQT9uWXu+p0oq820xV+x81kfIg0UNsLpyn6/iXaqiksz56xi55GJoRLcYTUp+vLb4L+2ZVMpmTp2ljheVBIO/xD1p5ZT2Yl1rkgDhY1wokrfiaQdS7BYQSax0ycVoyW4yfOMyvSs+L6j2GxKRrfvX/KDzLfQFV6z9HhnDTvDThRpoLARzlL+e9T0ULDrUGSbV9iJkxUFEtzqGWjmfB1fep2z/HOU1cZ/xRF2np0l0kBhI5yi7HcvaqeqpKzOFcTulRlLUSbBrZIhKD52KuyRLmxaJZPfnnIrJw+VhG9+ivnfZ6exE+64SAOFjXBQpe9r1Y4lOCrprbpXEKH1C6H3HEGZHO6WDMHt/MKkN7V+s2vE0z2vHfkRlYSSshuvjFzPzryDIg0UNsIRlb7jWTsFuw5HPtOLnSBZY7sPrYhPQZkCbpgMGzkrN7PJVcyctxpltZm3+ht2/h0RaaCwEYaV/V547VhXkLmfspOiZPrUhShTxW2TISg7HSQeEtgulEx87b2bqTLvBh0/E/9/z89ivwhjIg0UNsKArfosiojLQrOGsIREJb81mZ0OWcXr/oKAgyirC3dOhqDaUp4ycjrbi5Jhj3aR/cZXS0XlgHGfs9+IAZEGChuhVx//PejRKIW7D0c82YOdCFljOr9RHhmPMg24eTJs5G7czXakotLT7cUbvme/F70iDRQ2Qpdbv7iA1gxRXXpd+wpy2Xeu9GvAb1beHuizCf+Q4LJkbNx9Niu3BP/Qj3jIjH7+NbY7JeN6DauISUQl4eSFpCadP2K/IO0iDRQ2QqNt+y2JSshGU4awhERreRfL6h9a5G3ZhzLCpYj0B9r4iWbwbwkuS8acVUd/+YhPwMFL+Ld+7tTUXJ40j+1RyZC/t8vf/iUqCZW3qgb7bqG/Ju0iDRQ2QovjZ+9FL0YRrzbDm3djByxrdIfXZb8U/rNdZ+z94EcSXJkMWyfD/QLwI0MU7Dx46Q9Ps/0qeXni3DvVNagkrNj8o/3MaBdpoLARdbpt/0W0YAjrCjJP67uBaeM+vHPrNirvUXHz1psTa/1lYIME1ydD2LrPosuZRdigH+tF2u5D2a6VjOky2BIs82dzJjil+Ytz7S1pEWmgsBEqth+wLCYxBzs3hCU0OnHQeHZ4SuZuCEQZ4WL45b89N4M1hm0SGiQZwl89Mt7BZ2AZs5axvSsZ9MenZU9UdU3N2+9vp12pizRQ2AglfefIrPS6ECuIeOnFDkzWqHb9r58PQxmBriBUbJbQUMmwOdxP/qq6RooOHAv5RzvWg5Kpo2ZUWypQSViz/SfWlZJIA4WNkPqLJj47Dji2gpRZtK8gKSOnSQ+yvKLy7SmKfwEYJKFhkyFs/cqi5Mv5GKSfyvSshFfHsDaUjGrbr+x0ECoJ4lG2Rc8FrDGpSAOFjWB2eH15bPJV7MQQltCYxAHj2GEoeXX1NpQRzoelqb/Th3ESGjwZwl89Ot7BO1SyFq5lnaiYs3ILymozctpO1hgTaaCwEdSJc7/AxEYp3Pt16L86su5ljWrTt/SUzKu+DYGnWVdSMVSCOyTD5ohpDq0s1ou0TbuyfpRMemvS7YJrqCQorcU2kQYKG2HzN49NcOTVucC6gmh+Fyv53anSe5ks5ZXDPwhgjcmKAgnukwxhm76L4xx49L2dX6jxAoIw4qkeJd+dRiUhLCajzSuLWWM2kQYKGyHsOHBFfEouJjOEJSwmod9o1q6SOctl3sQ8F5L6cCd/1piSqJHgVskQ/vrRCWt3nEKNIXI+2cK6UjHr43Uoq824D/ewxoRIA4WNmDx/PyYwilhBQh5sz7qUNbJl75LjMmvwup11ryBUlElwt2TYFEs+ygwhnmZGturDelMyYcC4ygyZNxrEi2rx0pp2hTRQ7Nvubz4x8JDMk1vtVF8vz/BfwZpTMnnoZPEIicp7lFlujp4RaG9JoyiW4J7JED7bd3FkvPGr09WW8tQxM1l7SoY16XTtq+9RSYhOzG4/YJm9JaSBYtvQadDKhFSZe8u0Ux4WK84da0vJrEXrUUY4G5zy2L9n23vVLuoluG0yhOKZ3OrtP6HeEHl6LtKKv1iU1Ua8yLD1gzRQxE+nLJC5PKOLwn1Hg/+m6d75iBYvF39zEmWEtQGnbC0aEFNIcOdk2Bw1XebtS+1YQqJiOg5kfSoZ13PYjaQ0VBJ2fhUklgukgbL7cDCGGEI8sl2ZsZQ1oWTSYN9bWfy5ben1GwZWEComkuD+yRC27bckJNr4p/esF2knz2etKhn817aFuw+jkpCYloc0ULDREOXhsXE93mG7VzJrwRqUEU4HpTzefR47WXrFXBIaRTKEv206Yc0Oh1aWgp0Hg/7ckjWspOy9kkgDBVv0U7jnSNADrdleZQ1/vPu1Q8dRRtD+rr66mE5CY0mGzVEzHFpZKuKS415+l/WsZEyXwezuOKSBgi16qLZUpPstYjtTMnGgz83L/HMGxaUVI6c7tIJQMamExpUMoVhZLoTJPBXQTsas5axtRX9f634opIGCLZopD4+L7fYW342CmXNXoYxw6lJyi5frvsajXcwrodElQ/jbpr4OvhtWdOBY6D87sOaVTPPxt90BgzRQbNNppEA8kf3jM2x2WcObdi3a/y3KCJ9uO8nOheNiagmNMRk2Hfzsp/UirearmFHPvXr9YjjSQMFkdVFdXpE+ZQGbVMmEAWNvJPJHxWsl5SP86rjiZ0zsQELjTYbwuVeXnA2u46NW6ui6SIs0UDCNKuURcTGd32BzKSn7psrJi0mt+nzMDt5ZYh8SGnUyhL9r5rsuwKGVpfjYqfDHX2QHIivSQMEcyuRv289mUTLskc6Fe79GGWHV1hPsmJ0rdiOhsSfD5piZu2pqjP9/aawXaYdOYcciFWmgYAI5aspvXPadw6ZQMqHvKOnnIIqKy4dpu5LuiNiZBM9IhrBd/6VnQ1KxM0PUeZEWaaCgVIIlLCb6hddZvZJXZi5DGeHE+cRWvetrBaFifxI8JhnC+5tNXLdT5pYL7ZSdDopqo/h/tEIaKKirTd6mvaxSydCHXigIPIQywsotRj71YEzsUoInJcOmWFkqb1Vhr/pRuUiLNFBQdI+aihtp7/mzMiXFyRJPTlF5j4Jrlnen7mCHVK9ixxI8LxlCsbKcC3VoZZG9SIs0UDD8ZyxBkVHt+rMaJa/4Lb5TXY3Ke/x4LuGZXq5YQajYtwSPTIbw/uYT1zu2slgv0nYaRI8OaaBg7N27uZ/tokNVDHmwff6OAygjrNjkuhWEit1L8NRk2Bw7a3d5RSU60A+7SIs0mJiYmJiYOM599/0/BRW3rx66dt0AAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACOCAIAAADisD4eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHgSURBVHhe7dKxbRQAFETBK4Jy6MCZyyChYUJch0HyOvy6F59mtOGG7wEAAC/qE76ticteoBW6NXHZC7RCtyYue4FW6NbEZS/QCt2auOwFWqFbE5e9QCt0a+KyF2iFbk1c9gKt0K2Jy16gFbo1cdkLtEK3Ji57gVbo1sRlL9AK3Zq47AVaoVsTl71AK3Rr4rIXaIVuTVz2Aq3QrYnLXqAVujVx2Qu0QrcmLnuBVujWxGUv0ArdmrjsBVqhWxOXvUArdGvishdohW5NXPYCrdCticteoBW6NXHZC7RCtyYue4FW6NbEZS/QCt2auOwFWqFbE5e9QCt0a+KyF2iFbk1c9gKt0K2Jy17wtJW/b7/+/Php9r+ENXHRin1NK1anFavTitVpxeq0YnVasTqtWJ1WrE4rVqcVq9OK1WnF6rRidVqxOq1YnVasTitWpxWr04rVacXqtGJ1WrE6rVidVqxOK1anFavTitVpxeq0YnVasTqtWJ1WrE4rVqcVq9OK1WnF6rRidVqxOq1YnVasTitWpxWr04rVacXqtGJ1WrE6rVidVqxOK1anFavTitVpxeq0YnVasTqtWJ1WrE4rVqcVq9OK1WnF6rRidVqxOq1Y3fNWPt5/m31tTQAAwGt5PP4BKLFHkwWUg0MAAAAASUVORK5CYII=",alt:"flaga",className:"flagBox"})]})})]})})]})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("h1",{children:["K.F. ",Object(u.jsx)("span",{children:"Robotics"})]})})]})})},h=s(5),p=s(13),x=s.p+"static/media/carusel1.8c8b09b4.jpg",g=s.p+"static/media/carusel2.7aeb5d88.jpg",w=s.p+"static/media/carusel3.b86b32b3.jpg",O=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsxs)(p.a,{children:[Object(u.jsxs)(p.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:x,alt:"First slide"}),Object(u.jsxs)(p.a.Caption,{children:[Object(u.jsx)(o.b,{to:"/gerrisasv",className:"nav-link",children:Object(u.jsx)("h3",{className:"caruselTitle",children:"GERRIS ASV"})}),Object(u.jsx)("p",{className:"caruselDesc",children:s?"Uniwersalny bezza\u0142ogowy katamaran z funkcj\u0105 autopilota.":"A universal unmanned catamaran with an autopilot function."})]})]}),Object(u.jsxs)(p.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:g,alt:"Second slide"}),Object(u.jsxs)(p.a.Caption,{children:[Object(u.jsx)(o.b,{to:"/gerrisasvspecial",className:"nav-link",children:Object(u.jsx)("h3",{className:"caruselTitle",children:"GERRIS ASV SPECIAL"})}),Object(u.jsx)("p",{className:"caruselDesc",children:s?"Zintegrowany system do pomiar\xf3w batymetrycznych.":"Integrated system for bathymetric measurements."})]})]}),Object(u.jsxs)(p.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:w,alt:"Third slide"}),Object(u.jsxs)(p.a.Caption,{children:[Object(u.jsx)(o.b,{to:"/gerris1200",className:"nav-link",children:Object(u.jsx)("h3",{className:"caruselTitle",children:"GERRIS 1200"})}),Object(u.jsx)("p",{className:"caruselDesc",children:s?"Nowoczesny bezza\u0142ogowy katamaran z funkcj\u0105 autopilota (w trakcie test\xf3w).":"A modern unmanned catamaran with an autopilot function (under testing)."})]})]})]})},y=function(e){var a=e.text;return Object(u.jsx)("div",{className:"titleBox",children:Object(u.jsx)("p",{className:"titleText",children:a})})},v=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(y,{text:s?"O Firmie":"Our Company"}),Object(u.jsx)("div",{className:"aboutCompany",children:Object(u.jsx)("p",{children:s?"Firma zajmuje si\u0119 projektowaniem i wykonywaniem rozwi\u0105za\u0144 in\u017cynierskich. Tworzymy dedykowane rozwi\u0105zania dla klient\xf3w od projektu do realizacji. Nasz\u0105 specjalno\u015bci\u0105 s\u0105 bezza\u0142ogowe \u0142odzie do pomiar\xf3w batymetrycznych. Wi\u0119cej informacji o zrealizowanych i trwaj\u0105cych projektach zak\u0142adce Dzia\u0142alno\u015b\u0107":"The company deals with the design and implementation of engineering solutions. We create dedicated solutions for clients from design to implementation. We specialize in unmanned boats for bathymetric measurements. More information about completed and ongoing projects in the Projects tab"})}),Object(u.jsx)(O,{})]})},k=function(e){var a=e.title,s=e.text,i=e.date,t=m(),n=Object(r.a)(t,2),c=n[0].lang;n[1].changeLanguage;return Object(u.jsxs)("article",{className:"article",children:[Object(u.jsx)("h5",{children:a}),Object(u.jsx)("p",{children:s}),Object(u.jsxs)("span",{children:[c?"Data:":"Date:"," ",i]})]})},N=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(y,{text:s?"Aktualno\u015bci":"News"}),Object(u.jsx)(k,{title:s?"Tytu\u0142...":"Angielski tytu\u0142...",text:s?"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos modi reiciendis voluptatum voluptatibus a animi consequuntur ut repellat in ipsa ipsum suscipit similique quo cum sequi esse, labore sapiente corrupti! Sapiente esse ullam voluptas aspernatur facere, nihil natus iure autem vel veritatis inventore eligendi cumque totam, atque, facilis quaerat voluptate? Repudiandae atque dignissimos placeat doloribus maiores. Magnam maiores eligendi eum!":"Teskt po angielsku",date:"04.04.2021r."}),Object(u.jsx)("hr",{}),Object(u.jsx)(k,{title:s?"Tytu\u0142...":"Angielski tytu\u0142...",text:s?"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos modi reiciendis voluptatum voluptatibus a animi consequuntur ut repellat in ipsa ipsum suscipit similique quo cum sequi esse, labore sapiente corrupti! Sapiente esse ullam voluptas aspernatur facere, nihil natus iure autem vel veritatis inventore eligendi cumque totam, atque, facilis quaerat voluptate? Repudiandae atque dignissimos placeat doloribus maiores. Magnam maiores eligendi eum!":"Teskt po angielsku",date:"04.04.2021r."}),Object(u.jsx)("hr",{}),Object(u.jsx)(k,{title:s?"Tytu\u0142...":"Angielski tytu\u0142...",text:s?"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos modi reiciendis voluptatum voluptatibus a animi consequuntur ut repellat in ipsa ipsum suscipit similique quo cum sequi esse, labore sapiente corrupti! Sapiente esse ullam voluptas aspernatur facere, nihil natus iure autem vel veritatis inventore eligendi cumque totam, atque, facilis quaerat voluptate? Repudiandae atque dignissimos placeat doloribus maiores. Magnam maiores eligendi eum!":"Teskt po angielsku",date:"04.04.2021r."})]})})},z=function(e){var a=e.row1,s=e.row2,i=e.row3,t=e.row4,n=e.row5,c=e.row6,o=e.row7,l=e.row8,j=e.row9,d=e.row10,b=e.row11,h=e.row12,p=e.row13,x=m(),g=Object(r.a)(x,2),w=g[0].lang;g[1].changeLanguage;return Object(u.jsxs)("div",{className:"tableBox",children:[Object(u.jsx)("p",{children:w?"Parametry:":"Parameters:"}),Object(u.jsxs)("div",{className:"table",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"D\u0142ugo\u015b\u0107":"Length",":"]}),Object(u.jsx)("div",{className:"columnValue",children:a})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Szeroko\u015b\u0107":"Width",":"]}),Object(u.jsx)("div",{className:"columnValue",children:s})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Wysoko\u015b\u0107":"Height",":"]}),Object(u.jsx)("div",{className:"columnValue",children:i})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Masa w\u0142asna":"Own weight",":"]}),Object(u.jsx)("div",{className:"columnValue",children:t})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Maksymalna \u0142adowno\u015b\u0107":"Maximum payload",":"]}),Object(u.jsx)("div",{className:"columnValue",children:n})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Pr\u0119dko\u015b\u0107 maksymalna":"Max Speed",":"]}),Object(u.jsx)("div",{className:"columnValue",children:c})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Nap\u0119d":"Drive",":"]}),Object(u.jsx)("div",{className:"columnValue",children:o})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"\u015aruby nap\u0119dowe":"Propellers",":"]}),Object(u.jsx)("div",{className:"columnValue",children:l})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Zasilanie":"Power Supply",":"]}),Object(u.jsx)("div",{className:"columnValue",children:j})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Czas p\u0142ywania":"Swimming time",":"]}),Object(u.jsx)("div",{className:"columnValue",children:d})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Kad\u0142ub":"Hull",":"]}),Object(u.jsx)("div",{className:"columnValue",children:b})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"Sterowanie":"Control",":"]}),Object(u.jsx)("div",{className:"columnValue",children:h})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columnName",children:[w?"O\u015bwietlenie":"Lighting",":"]}),Object(u.jsx)("div",{className:"columnValue",children:p})]})]})]})},S=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsx)("div",{className:"bgSetBox",children:Object(u.jsxs)("div",{className:"setBox",children:[Object(u.jsxs)("div",{className:"setInclude",children:[Object(u.jsx)("p",{children:s?"Zestaw zawiera":"Set contains"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:s?"katamaran z akumulatorami 36Ah":"catamaran with 36Ah batteries"}),Object(u.jsx)("li",{children:s?"autopilot z telemetri\u0105":"autopilot with telemetry"}),Object(u.jsx)("li",{children:s?"kontroler do sterowania r\u0119cznego":"controller for manual control"}),Object(u.jsx)("li",{children:s?"skrzynie transportowe":"transport crates"}),Object(u.jsx)("li",{children:s?"\u0142adowarka akumulator\xf3w nap\u0119dowych":"drive battery charger"}),Object(u.jsx)("li",{children:s?"\u0142adowarka kontrolera steruj\u0105cego":"control controller charger"}),Object(u.jsx)("li",{children:s?"uchwyt echosond\u0119 i odbiornik GNSS":"sonar holder and GNSS receiver"}),Object(u.jsx)("li",{children:s?"narz\u0119dzia do obs\u0142ugi":"maintenance tools"})]})]}),Object(u.jsxs)("div",{className:"optional",children:[Object(u.jsx)("p",{children:s?"Dodatkowe opcjonalne wyposa\u017cenie:":"Additional optional equipment:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:s?"system wizyjny":"vision system"}),Object(u.jsx)("li",{children:s?"komputer pok\u0142adowy z komunikacj\u0105 ze stacj\u0105 naziemn\u0105":"on-board computer communication with the ground station"}),Object(u.jsx)("li",{children:"GPS RTK"}),Object(u.jsx)("li",{children:s?"echosonda":"echosounder"}),Object(u.jsx)("li",{children:s?"system omijania przeszk\xf3d":"obstacle avoidance system"}),Object(u.jsx)("li",{children:s?"system komunikcji GSM":"GSM communication system"})]})]})]})})},A=function(e){var a=e.text1,s=e.text2,i=e.text3,t=e.imgSrc1,n=e.imgSrc2,c=e.imgSrc3,o=m(),l=Object(r.a)(o,2),j=l[0].lang;l[1].changeLanguage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"gerrisBoxOdd",children:[Object(u.jsx)("p",{className:"gerrisTextOdd",children:a}),Object(u.jsx)("div",{className:"gerrisImgBoxOdd",children:Object(u.jsx)("div",{className:t})})]}),Object(u.jsxs)("div",{className:"gerrisBoxEven",children:[Object(u.jsx)("div",{className:"gerrisImgBoxEven",children:Object(u.jsx)("div",{className:n})}),Object(u.jsx)("p",{className:"gerrisTextEven",children:s})]}),Object(u.jsxs)("div",{className:"gerrisBoxOdd",children:[Object(u.jsx)("p",{className:"gerrisTextOdd",children:i}),Object(u.jsx)("div",{className:"gerrisImgBoxOdd",children:Object(u.jsx)("div",{className:c})})]}),Object(u.jsx)("em",{className:"gerrisDesign",children:j?"Zaprojektowany i budowany w Polsce przez zesp\xf3\u0142 in\u017cynier\xf3w i modelarzy.":"Designed and built in Poland by a team of engineers and modelers."}),Object(u.jsx)("p",{className:"gerrisHelp",children:j?"Oferujemy wsparcie w pomiarach batymetrycznych.":"We offer support in bathymetric measurements."})]})},f=s.p+"static/media/box.1965f740.jpg",R=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(y,{text:"Gerris ASV"}),Object(u.jsx)(A,{text1:s?"Gerris ASV - bezza\u0142ogowy katamaran z funkcj\u0105 autonomicznego sterowania. G\u0142\xf3wnym przeznaczeniem Gerris\u2019a s\u0105 pomiary batymetryczne w trudnym terenie. Zastosowane rozwi\u0105zania konstrukcyjne maj\u0105 na celu u\u0142atwienie obs\u0142ugi, a wysokiej jako\u015bci podzespo\u0142y podniesienie trwa\u0142o\u015bci i niezawodno\u015bci.":"Gerris ASV - unmanned catamaran with autonomous control function. Gerris's main purpose is bathymetric measurements in difficult terrain. The design solutions used are intended to facilitate service, and high-quality components increase durability and reliability.",text2:s?"Zintegrowany autopilot umo\u017cliwia na autonomiczne mapowania, kt\xf3re s\u0105 dok\u0142adniejsze i szybsze w realizacji.":"The integrated autopilot enables autonomous mappings that are more accurate and faster to implement.",text3:s?"Przetestowali\u015bmy Gerris\u2019a w najr\xf3\u017cniejszych warunkach pogodowych i terenowych, aby mie\u0107 pewno\u015b\u0107, \u017ce nie zawiedzie nas w terenie. Niestraszne mu s\u0105 niskie i wysokie temperatury, piasek, \u017cwir, ro\u015blinno\u015b\u0107 oraz deszcz. System uniwersalnego mocowania sprz\u0119tu pomiarowego pozwala w prosty spos\xf3b zamontowa\u0107 dowolny odbiornik GNSS i echosond\u0119.":"We have tested Gerris in a wide variety of weather and terrain conditions to make sure that it will not disappoint us in the field. It is not afraid of low and high temperatures, sand, gravel, vegetation and rain. The universal mounting system for measuring equipment allows you to easily mount any GNSS receiver and sonar. ",imgSrc1:"gerrisOneImgOdd1",imgSrc2:"gerrisOneImgEven",imgSrc3:"gerrisOneImgOdd3"}),Object(u.jsx)(z,{row1:"1200 mm",row2:"1000 mm",row3:"320 mm",row4:"15 kg",row5:"15 kg",row6:"1,5 m/s",row7:s?"4 silniki bezszczotkowe":"4 brushless motors",row8:s?"mosi\u0119\u017cne":"brass",row9:s?"2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah":"2x Li-ion 3S 36Ah or 2x Li-ion 3S 72Ah",row10:s?"do 2h (@1,2 m/s z akumulatorem 36Ah)":"to 2h (@1,2 m/s with battery 36Ah)",row11:s?"kompozyt epoksydowo-szklany":"epoxy-glass composite",row12:s?"r\u0119czne lub autonomiczne":"manual or standalone",row13:"LED"})]}),Object(u.jsx)(S,{}),Object(u.jsx)("img",{src:f,alt:"skrzynka",className:"setBoxImg"})]})},E=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsx)("div",{className:"bgSetBox",children:Object(u.jsxs)("div",{className:"setBox",children:[Object(u.jsxs)("div",{className:"setInclude",children:[Object(u.jsx)("p",{children:s?"Zestaw zawiera":"Set contains"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:s?"katamaran z akumulatorami 36Ah":"catamaran with 36Ah batteries"}),Object(u.jsx)("li",{children:s?"autopilot z telemetri\u0105":"autopilot with telemetry"}),Object(u.jsx)("li",{children:s?"kontroler do sterowania r\u0119cznego":"controller for manual control"}),Object(u.jsx)("li",{children:s?"skrzynie transportowe":"transport crates"}),Object(u.jsx)("li",{children:s?"\u0142adowarka akumulator\xf3w nap\u0119dowych":"drive battery charger"}),Object(u.jsx)("li",{children:s?"\u0142adowarka kontrolera steruj\u0105cego":"control controller charger"}),Object(u.jsx)("li",{children:s?"uchwyt echosond\u0119 i odbiornik GNSS":"sonar holder and GNSS receiver"}),Object(u.jsx)("li",{children:s?"narz\u0119dzia do obs\u0142ugi":"maintenance tools"}),Object(u.jsx)("li",{children:s?"komputer pok\u0142adowy z komunikacj\u0105 ze stacj\u0105 naziemn\u0105":"on-board computer communication with the ground station"}),Object(u.jsx)("li",{children:"GPS RTK"}),Object(u.jsx)("li",{children:s?"system komunikcji GSM":"GSM communication system"}),Object(u.jsx)("li",{children:s?"echosonda":"echosounder"})]})]}),Object(u.jsxs)("div",{className:"optional",children:[Object(u.jsx)("p",{children:s?"Dodatkowe opcjonalne wyposa\u017cenie:":"Additional optional equipment:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:s?"system wizyjny":"vision system"}),Object(u.jsx)("li",{children:s?"system omijania przeszk\xf3d":"obstacle avoidance system"})]})]})]})})},G=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(y,{text:"Gerris ASV Surveyor"}),Object(u.jsx)(A,{text1:s?"Gerris ASV Surveyor - Jest to rozszerzona wersja katamaranu Gerris ASV ze zintegrowanym systemem do pomiar\xf3w batymetrycznych.":"Gerris ASV Surveyor - This is an extended version of the Gerris ASV catamaran with an integrated bathymetric measurement system.",text2:s?"W autonomicznym katamaranie zamontowane zosta\u0142y dodatkowo echosonda, GPS RTK, komputer pok\u0142adowy z Windows 10 oraz cyfrowy system transmisji danych pomiarowych do stacji naziemnej. Taki zestaw pozwala na kompleksowe wykonywanie pomiar\xf3w batymetrycznych \u201cout of the box\u201d z podgl\u0105dem danych na \u017cywo w stacji naziemnej.":"The autonomous catamaran also has an echo sounder, GPS RTK, on-board computer with Windows 10 and a digital measurement data transmission system to the ground station. Such a set allows for comprehensive\u201c out of the box \u201dbathymetric measurements with live data preview at the ground station. ",text3:s?"Wyposa\u017cony w zewn\u0119trzne nap\u0119dy zanurzone pod wod\u0105.":"Equipped with external submersible drives.",imgSrc1:"gerrisTwoImgOdd1",imgSrc2:"gerrisTwoImgEven",imgSrc3:"gerrisTwoImgOdd3"}),Object(u.jsx)(z,{row1:"1200 mm",row2:"1000 mm",row3:"320 mm",row4:"15 kg",row5:"15 kg",row6:"1,5 m/s",row7:s?"2 p\u0119dniki BR T200":"2 propellers BR T200",row8:s?"poliw\u0119glan":"polycarbonate",row9:s?"2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah":"2x Li-ion 3S 36Ah or 2x Li-ion 3S 72Ah",row10:s?"do 2h (@1,2 m/s z akumulatorem 36Ah)":"to 2h (@1,2 m/s with battery 36Ah)",row11:s?"kompozyt epoksydowo-szklany":"epoxy-glass composite",row12:s?"r\u0119czne lub autonomiczne":"manual or standalone",row13:"LED"})]}),Object(u.jsx)(E,{})]})},I=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(y,{text:"Gerris 1200"}),Object(u.jsx)(A,{text1:s?"Ci\u0105g\u0142y rozw\xf3j, optymalizacja procesu produkcji i doskonalenie konstrukcji doprowadzi\u0142o nas do punktu, w kt\xf3rym tworzymy udoskonalonego Gerrisa ASV - Gerris ASV 1200. Praktyczniejszego, sprawniejszego i jeszcze bardziej niezawodnego.":"Continuous development, optimization of the production process and design refinement have led us to the point where we are making the improved Gerris ASV - Gerris ASV 1200. More practical, efficient and even more reliable.",text2:s?"Projektujemy nowe p\u0142ywaki o mniejszym wsp\xf3\u0142czynniku oporu dla wyd\u0142u\u017cenia czasu pracy na baterii. R\xf3wnie\u017c b\u0119dzie wykonany z wytrzyma\u0142ego kompozytu epoksydowo-szklanego, jednak w wykorzystaniem technologii infuzji dla uzyskania najwy\u017cszej wytrzyma\u0142o\u015bci przy najni\u017cszej masie kompozytu.":"We are designing new floats with a lower drag coefficient to extend battery life. It will also be made of durable epoxy-glass composite, but using infusion technology for the highest strength with the lowest composite weight.",text3:s?"Nowe os\u0142ony nap\u0119dowe - wytrzymalsze i \u0142atwiejsze w utrzymaniu. \u0141atwe dostosowanie r\xf3\u017cnego rodzaju nap\u0119d\xf3w. Niezatapialno\u015b\u0107 - cecha jak\u0105 mo\u017ce pochwali\u0107 si\u0119 niewiele tego typu jednostek. Mamy \u015bwiadomo\u015b\u0107, \u017ce sprz\u0119t pomiarowy jest cenny, st\u0105d chcemy mie\u0107 pewno\u015b\u0107, \u017ce \u201cnie p\xf3jdzie on na dno\u201d.":'New drive covers - more durable and easier to maintain. Easy adaptation of various types of drives. Unsinkability - a feature that few such units can boast. We know that measuring equipment is valuable, so we want to be sure that" it will not go to the bottom ".',imgSrc1:"gerrisThreeImgOdd1",imgSrc2:"gerrisThreeImgEven",imgSrc3:"gerrisThreeImgOdd3"}),Object(u.jsx)("em",{className:"gerrisMoreSoon",children:s?"Wkr\xf3tce wi\u0119cej informacji!":"More info coming soon!"}),Object(u.jsx)(z,{row1:"",row2:"",row3:"",row4:"",row5:"",row6:"",row7:"",row8:"",row9:"",row10:"",row11:"",row12:"",row13:""})]}),Object(u.jsx)(S,{})]})},C=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(y,{text:s?"Znajd\u017a nas...":"Find Us..."}),Object(u.jsx)("div",{className:"map",children:Object(u.jsx)("iframe",{title:"mapa",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24523.896586687366!2d16.913686229961073!3d51.12002075569369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc02fd988a371%3A0x4eeacf52241b19c2!2sRezedowa%2060%2C%2054-515%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1617541408014!5m2!1spl!2spl",width:"800",height:"600"})})]})};var V=Object(h.g)((function(e){var a=e.history;return Object(i.useEffect)((function(){var e=a.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),T=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(V,{}),Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(v,{})}}),Object(u.jsx)(h.b,{exact:!0,path:"/aktualnosci",render:function(){return Object(u.jsx)(N,{})}}),Object(u.jsx)(h.b,{exact:!0,path:"/gerrisasv",render:function(){return Object(u.jsx)(R,{})}}),Object(u.jsx)(h.b,{exact:!0,path:"/gerrisasvspecial",render:function(){return Object(u.jsx)(G,{})}}),Object(u.jsx)(h.b,{exact:!0,path:"/gerris1200",render:function(){return Object(u.jsx)(I,{})}}),Object(u.jsx)(h.b,{exact:!0,path:"/kontakt",render:function(){return Object(u.jsx)(C,{})}}),Object(u.jsx)(h.a,{to:"/"})]})]})},F=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang;a[1].changeLanguage;return Object(u.jsxs)("div",{className:"contact",children:[Object(u.jsx)("div",{className:"triangle-topleft"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{className:"contactTitle",children:s?"Kontakt":"Contact"}),Object(u.jsx)("span",{className:"contactName",children:"K.F. Robotics Sp. z o.o."}),Object(u.jsxs)("div",{className:"dispCol",children:[Object(u.jsxs)("div",{className:"person",children:[Object(u.jsxs)("a",{href:"tel:601989908",children:[Object(u.jsx)("i",{className:"fas fa-phone-alt"}),"+48 601 989 908"]}),Object(u.jsxs)("a",{href:"mailto:r.g.kowalczyk@gmail.com",children:[Object(u.jsx)("i",{className:"fas fa-envelope"}),"r.g.kowalczyk@gmail.com"]}),Object(u.jsxs)("a",{href:"https://www.facebook.com/GerrisUSV",children:[Object(u.jsx)("i",{className:"fab fa-facebook"}),"Facebook"]}),Object(u.jsxs)("a",{href:"https://www.instagram.com/gerris_usv/",children:[Object(u.jsx)("i",{className:"fab fa-instagram"}),"Instagram"]})]}),Object(u.jsxs)("div",{className:"company",children:[Object(u.jsx)("p",{children:"ul. Rezedowa 60, 54-515 Wroc\u0142aw"}),Object(u.jsx)("p",{children:"KRS: 0000862246"}),Object(u.jsx)("p",{children:"NIP: 8943159066"}),Object(u.jsx)("p",{children:"Regon: 38712781200000"}),Object(u.jsx)("p",{children:"S\u0105d Rejonowy dla Wroc\u0142awia-Fabrycznej, VI Wydzia\u0142 Gospodarczy Krajowego Rejestru S\u0105dowego"})]})]})]})]})},U=function(){var e=m(),a=Object(r.a)(e,2),s=a[0].lang,i=(a[1].changeLanguage,(new Date).getFullYear());return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("h6",{className:"footer",children:["\xa9 ",i," K.F. Robotics Sp. z o.o. ",s?"Wszelkie Prawa Zastrze\u017cone":"All Rights Reserved"]})})},L=function(){return Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"facebook",children:Object(u.jsx)("a",{href:"https://www.facebook.com/GerrisUSV",children:Object(u.jsx)("i",{className:"fab fa-facebook"})})}),Object(u.jsx)("div",{className:"instagram",children:Object(u.jsx)("a",{href:"https://www.instagram.com/gerris_usv/",children:Object(u.jsx)("i",{className:"fab fa-instagram"})})})]})};var Q=function(){return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(b,{}),Object(u.jsx)(T,{}),Object(u.jsx)(F,{}),Object(u.jsx)(U,{}),Object(u.jsx)(L,{})]})};s(33);c.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(Q,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b997e71c.chunk.js.map