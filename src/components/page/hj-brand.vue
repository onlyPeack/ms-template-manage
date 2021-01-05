<template>
    <div id="hj-brand">
        <!--banner-->
        <div class="inside_banner_brand">

        </div>
        <!--品牌筛选-->
        <div class="brand-nav">
            <ul>
                <li style="color: #FF7F52;" onclick="initCalendar('All',this)">全部</li>
                <li onclick="initCalendar('A',this)"><code>A</code></li>
                <li onclick="initCalendar('B',this)"><code>B</code></li>
                <li onclick="initCalendar('C',this)"><code>C</code></li>
                <li onclick="initCalendar('D',this)"><code>D</code></li>
                <li onclick="initCalendar('E',this)"><code>E</code></li>
                <li onclick="initCalendar('F',this)"><code>F</code></li>
                <li onclick="initCalendar('G',this)"><code>G</code></li>
                <li onclick="initCalendar('H',this)"><code>H</code></li>
                <li onclick="initCalendar('I',this)"><code>I</code></li>
                <li onclick="initCalendar('J',this)"><code>J</code></li>
                <li onclick="initCalendar('K',this)"><code>K</code></li>
                <li onclick="initCalendar('L',this)"><code>L</code></li>
                <li onclick="initCalendar('M',this)"><code>M</code></li>
                <li onclick="initCalendar('N',this)"><code>N</code></li>
                <li onclick="initCalendar('O',this)"><code>O</code></li>
                <li onclick="initCalendar('P',this)"><code>P</code></li>
                <li onclick="initCalendar('Q',this)"><code>Q</code></li>
                <li onclick="initCalendar('R',this)"><code>R</code></li>
                <li onclick="initCalendar('S',this)"><code>S</code></li>
                <li onclick="initCalendar('T',this)"><code>T</code></li>
                <li onclick="initCalendar('U',this)"><code>U</code></li>
                <li onclick="initCalendar('V',this)"><code>V</code></li>
                <li onclick="initCalendar('W',this)"><code>W</code></li>
                <li onclick="initCalendar('X',this)"><code>X</code></li>
                <li onclick="initCalendar('Y',this)"><code>Y</code></li>
                <li onclick="initCalendar('Z',this)"><code>Z</code></li>
                <li onclick="initCalendar('09',this)"><code>0~9</code></li>
            </ul>
        </div>

        <div class="wrap">
            <!--品牌-->
            <div class="brand-detail-div">

                <div class="brand-detail" name="Schneider">
                    <img src="http://www.hejigy.com/Img/brand/1.png" alt="">
                    <div class="brand-detail-text">施耐德</div>
                </div>

                <div class="brand-detail" name="3M">
                    <img src="http://www.hejigy.com/Img/brand/6.png" alt="">
                    <div class="brand-detail-text">3M</div>
                </div>

                <div class="brand-detail" name="ABB">
                    <img src="http://www.hejigy.com/Img/brand/4.png" alt="">
                    <div class="brand-detail-text">ABB</div>
                </div>

                <div class="brand-detail" name="AMMEX">
                    <img src="http://www.hejigy.com/Img/brand/14.png" alt="">
                    <div class="brand-detail-text">爱马斯</div>
                </div>

                <div class="brand-detail" name="Ansell">
                    <img src="http://www.hejigy.com/Img/brand/15.png" alt="">
                    <div class="brand-detail-text">安思尔</div>
                </div>

                <div class="brand-detail" name="APT">
                    <img src="http://www.hejigy.com/Img/brand/16.png" alt="">
                    <div class="brand-detail-text">APT</div>
                </div>

                <div class="brand-detail" name="Autonics">
                    <img src="http://www.hejigy.com/Img/brand/17.png" alt="">
                    <div class="brand-detail-text">奥托尼克斯</div>
                </div>

                <div class="brand-detail" name="Deli">
                    <img src="http://www.hejigy.com/Img/brand/18.png" alt="">
                    <div class="brand-detail-text">德力西</div>
                </div>

                <div class="brand-detail" name="Kcard">
                    <img src="http://www.hejigy.com/Img/brand/19.png" alt="">
                    <div class="brand-detail-text">K牌</div>
                </div>

                <div class="brand-detail" name="Lsproduction">
                    <img src="http://www.hejigy.com/Img/brand/20.png" alt="">
                    <div class="brand-detail-text">ls产电</div>
                </div>

                <div class="brand-detail" name="SLDJ">
                    <img src="http://www.hejigy.com/Img/brand/12.png" alt="">
                    <div class="brand-detail-text">三菱电机</div>
                </div>

                <div class="brand-detail" name="NSK">
                    <img src="http://www.hejigy.com/Img/brand/21.png" alt="">
                    <div class="brand-detail-text">NSK</div>
                </div>

                <div class="brand-detail" name="OMRON">
                    <img src="http://www.hejigy.com/Img/brand/2.png" alt="">
                    <div class="brand-detail-text">omron  欧姆龙</div>
                </div>


                <div class="brand-detail" name="OSG">
                    <img src="http://www.hejigy.com/Img/brand/22.png" alt="">
                    <div class="brand-detail-text">OSG</div>
                </div>


                <div class="brand-detail" name="Pica">
                    <img src="http://www.hejigy.com/Img/brand/23.png" alt="">
                    <div class="brand-detail-text">pica</div>
                </div>


                <div class="brand-detail" name="ProsKit">
                    <img src="http://www.hejigy.com/Img/brand/24.png" alt="">
                    <div class="brand-detail-text">宝工</div>
                </div>

                <div class="brand-detail" name="Safetyjogger">
                    <img src="http://www.hejigy.com/Img/brand/25.png" alt="">
                    <div class="brand-detail-text">safety jogger</div>
                </div>

                <div class="brand-detail" name="Siemens">
                    <img src="http://www.hejigy.com/Img/brand/3.png" alt="">
                    <div class="brand-detail-text">西门子</div>
                </div>

                <div class="brand-detail" name="SMC">
                    <img src="http://www.hejigy.com/Img/brand/11.png" alt="">
                    <div class="brand-detail-text">SMC</div>
                </div>

                <div class="brand-detail" name="TANK007">
                    <img src="http://www.hejigy.com/Img/brand/26.png" alt="">
                    <div class="brand-detail-text">TANK007</div>
                </div>

                <div class="brand-detail" name="VIEW">
                    <img src="http://www.hejigy.com/Img/brand/27.png" alt="">
                    <div class="brand-detail-text">VIEW</div>
                </div>

                <div class="brand-detail" name="YAMAWA">
                    <img src="http://www.hejigy.com/Img/brand/28.png" alt="">
                    <div class="brand-detail-text">YAMAWA</div>
                </div>

                <div class="brand-detail" name="Bosch">
                    <img src="http://www.hejigy.com/Img/brand/7.png" alt="">
                    <div class="brand-detail-text">博世</div>
                </div>

                <div class="brand-detail" name="BK">
                    <img src="http://www.hejigy.com/Img/brand/29.png" alt="">
                    <div class="brand-detail-text">步科</div>
                </div>

                <div class="brand-detail" name="CSKG">
                    <img src="http://www.hejigy.com/Img/brand/30.png" alt="">
                    <div class="brand-detail-text">常熟开关</div>
                </div>

                <div class="brand-detail" name="Devon">
                    <img src="http://www.hejigy.com/Img/brand/31.png" alt="">
                    <div class="brand-detail-text">大有</div>
                </div>

                <div class="brand-detail" name="Dyepagoda">
                    <img src="http://www.hejigy.com/Img/brand/32.png" alt="">
                    <div class="brand-detail-text">代尔塔</div>
                </div>

                <div class="brand-detail" name="Danfoss">
                    <img src="http://www.hejigy.com/Img/brand/33.png" alt="">
                    <div class="brand-detail-text">丹佛斯</div>
                </div>

                <div class="brand-detail" name="Deli">
                    <img src="http://www.hejigy.com/Img/brand/34.png" alt="">
                    <div class="brand-detail-text">得力</div>
                </div>

                <div class="brand-detail" name="DeWalt">
                    <img src="http://www.hejigy.com/Img/brand/35.png" alt="">
                    <div class="brand-detail-text">得伟</div>
                </div>

                <div class="brand-detail" name="Dongcheng">
                    <img src="http://www.hejigy.com/Img/brand/36.png" alt="">
                    <div class="brand-detail-text">东成</div>
                </div>

                <div class="brand-detail" name="Dongfangdianlan">
                    <img src="http://www.hejigy.com/Img/brand/37.png" alt="">
                    <div class="brand-detail-text">东方电缆</div>
                </div>

                <div class="brand-detail" name="DUPONT">
                    <img src="http://www.hejigy.com/Img/brand/38.png" alt="">
                    <div class="brand-detail-text">杜邦</div>
                </div>

                <div class="brand-detail" name="DunWang">
                    <img src="http://www.hejigy.com/Img/brand/39.png" alt="">
                    <div class="brand-detail-text">盾王</div>
                </div>

                <div class="brand-detail" name="Feilipu">
                    <img src="http://www.hejigy.com/Img/brand/40.png" alt="">
                    <div class="brand-detail-text">飞利浦</div>
                </div>

                <div class="brand-detail" name="Flyingspirit">
                    <img src="http://www.hejigy.com/Img/brand/41.png" alt="">
                    <div class="brand-detail-text">飞灵</div>
                </div>

                <div class="brand-detail" name="Feinikesi">
                    <img src="http://www.hejigy.com/Img/brand/9.png" alt="">
                    <div class="brand-detail-text">菲尼克斯</div>
                </div>

                <div class="brand-detail" name="Festo">
                    <img src="http://www.hejigy.com/Img/brand/13.png" alt="">
                    <div class="brand-detail-text">费斯托</div>
                </div>

                <div class="brand-detail" name="Fenghuang">
                    <img src="http://www.hejigy.com/Img/brand/42.png" alt="">
                    <div class="brand-detail-text">凤凰</div>
                </div>

                <div class="brand-detail" name="FSZM">
                    <img src="http://www.hejigy.com/Img/brand/43.png" alt="">
                    <div class="brand-detail-text">佛山照明</div>
                </div>

                <div class="brand-detail" name="Fluke">
                    <img src="http://www.hejigy.com/Img/brand/44.png" alt="">
                    <div class="brand-detail-text">福禄克</div>
                </div>

                <div class="brand-detail" name="Fujimotor">
                    <img src="http://www.hejigy.com/Img/brand/45.png" alt="">
                    <div class="brand-detail-text">富士电机</div>
                </div>

                <div class="brand-detail" name="Gangdun">
                    <img src="http://www.hejigy.com/Img/brand/46.png" alt="">
                    <div class="brand-detail-text">钢盾</div>
                </div>

                <div class="brand-detail" name="GeJie">
                    <img src="http://www.hejigy.com/Img/brand/47.png" alt="">
                    <div class="brand-detail-text">格洁</div>
                </div>

                <div class="brand-detail" name="Gongniu">
                    <img src="http://www.hejigy.com/Img/brand/48.png" alt="">
                    <div class="brand-detail-text">公牛</div>
                </div>

                <div class="brand-detail" name="Guanglu">
                    <img src="http://www.hejigy.com/Img/brand/49.png" alt="">
                    <div class="brand-detail-text">广陆</div>
                </div>

                <div class="brand-detail" name="Haliang">
                    <img src="http://www.hejigy.com/Img/brand/50.png" alt="">
                    <div class="brand-detail-text">哈量</div>
                </div>

                <div class="brand-detail" name="Hangao">
                    <img src="http://www.hejigy.com/Img/brand/51.png" alt="">
                    <div class="brand-detail-text">汉高</div>
                </div>

                <div class="brand-detail" name="Hequan">
                    <img src="http://www.hejigy.com/Img/brand/5.png" alt="">
                    <div class="brand-detail-text">和泉</div>
                </div>

                <div class="brand-detail" name="Huali">
                    <img src="http://www.hejigy.com/Img/brand/52.png" alt="">
                    <div class="brand-detail-text">华立</div>
                </div>

                <div class="brand-detail" name="Huatong">
                    <img src="http://www.hejigy.com/Img/brand/53.png" alt="">
                    <div class="brand-detail-text">华通</div>
                </div>

                <div class="brand-detail" name="Huayangnilong">
                    <img src="http://www.hejigy.com/Img/brand/54.png" alt="">
                    <div class="brand-detail-text">华洋尼龙</div>
                </div>

                <div class="brand-detail" name="Honeywell">
                    <img src="http://www.hejigy.com/Img/brand/55.png" alt="">
                    <div class="brand-detail-text">霍尼韦尔</div>
                </div>

                <div class="brand-detail" name="Jianzhun">
                    <img src="http://www.hejigy.com/Img/brand/56.png" alt="">
                    <div class="brand-detail-text">建准</div>
                </div>

                <div class="brand-detail" name="Jinbaili">
                    <img src="http://www.hejigy.com/Img/brand/57.png" alt="">
                    <div class="brand-detail-text">金佰利</div>
                </div>

                <div class="brand-detail" name="Jinmile">
                    <img src="http://www.hejigy.com/Img/brand/58.png" alt="">
                    <div class="brand-detail-text">金米勒</div>
                </div>

                <div class="brand-detail" name="Jinqi">
                    <img src="http://www.hejigy.com/Img/brand/59.png" alt="">
                    <div class="brand-detail-text">金器</div>
                </div>

                <div class="brand-detail" name="Jinxiang">
                    <img src="http://www.hejigy.com/Img/brand/60.png" alt="">
                    <div class="brand-detail-text">金象</div>
                </div>

                <div class="brand-detail" name="Juba">
                    <img src="http://www.hejigy.com/Img/brand/61.png" alt="">
                    <div class="brand-detail-text">巨霸</div>
                </div>

                <div class="brand-detail" name="Kagu">
                    <img src="http://www.hejigy.com/Img/brand/62.png" alt="">
                    <div class="brand-detail-text">卡固</div>
                </div>

                <div class="brand-detail" name="H_lakeland">
                    <img src="http://www.hejigy.com/Img/brand/63.png" alt="">
                    <div class="brand-detail-text">雷克兰</div>
                </div>

                <div class="brand-detail" name="Lixinbao">
                    <img src="http://www.hejigy.com/Img/brand/64.png" alt="">
                    <div class="brand-detail-text">力新宝</div>
                </div>

                <div class="brand-detail" name="Liyide">
                    <img src="http://www.hejigy.com/Img/brand/65.png" alt="">
                    <div class="brand-detail-text">力易得</div>
                </div>

                <div class="brand-detail" name="Liangxindianqi">
                    <img src="http://www.hejigy.com/Img/brand/66.png" alt="">
                    <div class="brand-detail-text">良信电器</div>
                </div>

                <div class="brand-detail" name="Linyang">
                    <img src="http://www.hejigy.com/Img/brand/67.png" alt="">
                    <div class="brand-detail-text">林洋</div>
                </div>

                <div class="brand-detail" name="Luogelang">
                    <img src="http://www.hejigy.com/Img/brand/68.png" alt="">
                    <div class="brand-detail-text">罗格朗</div>
                </div>

                <div class="brand-detail" name="Maitaibao">
                    <img src="http://www.hejigy.com/Img/brand/69.png" alt="">
                    <div class="brand-detail-text">麦太保</div>
                </div>

                <div class="brand-detail" name="Meisian">
                    <img src="http://www.hejigy.com/Img/brand/70.png" alt="">
                    <div class="brand-detail-text">梅思安</div>
                </div>


                <div class="brand-detail" name="Mingwei">
                    <img src="http://www.hejigy.com/Img/brand/8.png" alt="">
                    <div class="brand-detail-text">明纬</div>
                </div>

                <div class="brand-detail" name="Sanfeng">
                    <img src="http://www.hejigy.com/Img/brand/71.png" alt="">
                    <div class="brand-detail-text">三丰</div>
                </div>

                <div class="brand-detail" name="Shanggong">
                    <img src="http://www.hejigy.com/Img/brand/72.png" alt="">
                    <div class="brand-detail-text">上工</div>
                </div>

                <div class="brand-detail" name="Shanghaitianyidianqi">
                    <img src="http://www.hejigy.com/Img/brand/73.png" alt="">
                    <div class="brand-detail-text">上海天逸电器</div>
                </div>

                <div class="brand-detail" name="Shangshang">
                    <img src="http://www.hejigy.com/Img/brand/74.png" alt="">
                    <div class="brand-detail-text">上上</div>
                </div>

                <div class="brand-detail" name="Shenledianqi">
                    <img src="http://www.hejigy.com/Img/brand/75.png" alt="">
                    <div class="brand-detail-text">申乐电器</div>
                </div>

                <div class="brand-detail" name="Shengeban">
                    <img src="http://www.hejigy.com/Img/brand/76.png" alt="">
                    <div class="brand-detail-text">圣戈班</div>
                </div>

                <div class="brand-detail" name="Schneider">
                    <img src="http://www.hejigy.com/Img/brand/77.png" alt="">
                    <div class="brand-detail-text">施耐德万高</div>
                </div>

                <div class="brand-detail" name="STANLEY">
                    <img src="http://www.hejigy.com/Img/brand/78.png" alt="">
                    <div class="brand-detail-text">史丹利</div>
                </div>

                <div class="brand-detail" name="Star">
                    <img src="http://www.hejigy.com/Img/brand/79.png" alt="">
                    <div class="brand-detail-text">世达</div>
                </div>

                <div class="brand-detail" name="Songxian">
                    <img src="http://www.hejigy.com/Img/brand/80.png" alt="">
                    <div class="brand-detail-text">松下</div>
                </div>

                <div class="brand-detail" name="Tianzheng">
                    <img src="http://www.hejigy.com/Img/brand/82.png" alt="">
                    <div class="brand-detail-text">天正</div>
                </div>

                <div class="brand-detail" name="Tiandao">
                    <img src="http://www.hejigy.com/Img/brand/83.png" alt="">
                    <div class="brand-detail-text">田岛</div>
                </div>

                <div class="brand-detail" name="Weiluntong">
                    <img src="http://www.hejigy.com/Img/brand/84.png" alt="">
                    <div class="brand-detail-text">威伦通</div>
                </div>

                <div class="brand-detail" name="Weiteshi">
                    <img src="http://www.hejigy.com/Img/brand/85.png" alt="">
                    <div class="brand-detail-text">威特士</div>
                </div>

                <div class="brand-detail" name="Weihujia">
                    <img src="http://www.hejigy.com/Img/brand/86.png" alt="">
                    <div class="brand-detail-text">微护佳</div>
                </div>

                <div class="brand-detail" name="Weikeshi">
                    <img src="http://www.hejigy.com/Img/brand/87.png" alt="">
                    <div class="brand-detail-text">维克士</div>
                </div>

                <div class="brand-detail" name="Weidemile">
                    <img src="http://www.hejigy.com/Img/brand/10.png" alt="">
                    <div class="brand-detail-text">魏德米勒</div>
                </div>

                <div class="brand-detail" name="Yadeke">
                    <img src="http://www.hejigy.com/Img/brand/88.png" alt="">
                    <div class="brand-detail-text">亚德客</div>
                </div>

                <div class="brand-detail" name="Yidunmule">
                    <img src="http://www.hejigy.com/Img/brand/89.png" alt="">
                    <div class="brand-detail-text">伊顿穆勒</div>
                </div>

                <div class="brand-detail" name="Yongle">
                    <img src="http://www.hejigy.com/Img/brand/90.png" alt="">
                    <div class="brand-detail-text">永乐</div>
                </div>

                <div class="brand-detail" name="Yougong">
                    <img src="http://www.hejigy.com/Img/brand/91.png" alt="">
                    <div class="brand-detail-text">优工</div>
                </div>

                <div class="brand-detail" name="Youlide">
                    <img src="http://www.hejigy.com/Img/brand/92.png" alt="">
                    <div class="brand-detail-text">优利德</div>
                </div>

                <div class="brand-detail" name="Younika">
                    <img src="http://www.hejigy.com/Img/brand/93.png" alt="">
                    <div class="brand-detail-text">优尼卡</div>
                </div>

                <div class="brand-detail" name="Youweisi">
                    <img src="http://www.hejigy.com/Img/brand/94.png" alt="">
                    <div class="brand-detail-text">优唯斯</div>
                </div>

                <div class="brand-detail" name="Yutongduantou">
                    <img src="http://www.hejigy.com/Img/brand/95.png" alt="">
                    <div class="brand-detail-text">浴通端头</div>
                </div>

                <div class="brand-detail" name="Yuandingdianqi">
                    <img src="http://www.hejigy.com/Img/brand/96.png" alt="">
                    <div class="brand-detail-text">源顶电气</div>
                </div>

                <div class="brand-detail" name="Yueanbio">
                    <img src="http://www.hejigy.com/Img/brand/97.png" alt="">
                    <div class="brand-detail-text">约案彼欧</div>
                </div>

                <div class="brand-detail" name="CCJG">
                    <img src="http://www.hejigy.com/Img/brand/98.png" alt="">
                    <div class="brand-detail-text">长城精工</div>
                </div>

                <div class="brand-detail" name="CHSG">
                    <img src="http://www.hejigy.com/Img/brand/99.png" alt="">
                    <div class="brand-detail-text">长虹塑工</div>
                </div>

                <div class="brand-detail" name="ZHY">
                    <img src="http://www.hejigy.com/Img/brand/100.png" alt="">
                    <div class="brand-detail-text">正河源</div>
                </div>

                <div class="brand-detail" name="ZT">
                    <img src="http://www.hejigy.com/Img/brand/101.png" alt="">
                    <div class="brand-detail-text">正泰</div>
                </div>

                <div class="brand-detail" name="SZHQ">
                    <img src="http://www.hejigy.com/Img/brand/81.png" alt="">
                    <div class="brand-detail-text">苏州恒启</div>
                </div>

                <div class="brand-detail" name="HH">
                    <img src="http://www.hejigy.com/Img/brand/102.png" alt="">
                    <div class="brand-detail-text">韩华</div>
                </div>

                <div class="brand-detail" name="Honeywell">
                    <img src="http://www.hejigy.com/Img/brand/103.png" alt="">
                    <div class="brand-detail-text">honeywell</div>
                </div>

                <div class="brand-detail" name="Yaskawa">
                    <img src="http://www.hejigy.com/Img/brand/104.png" alt="">
                    <div class="brand-detail-text">安川</div>
                </div>

                <div class="brand-detail" name="Angel">
                    <img src="http://www.hejigy.com/Img/brand/105.png" alt="">
                    <div class="brand-detail-text">安科瑞</div>
                </div>

                <div class="brand-detail" name="Hagrid">
                    <img src="http://www.hejigy.com/Img/brand/107.png" alt="">
                    <div class="brand-detail-text">海格</div>
                </div>

                <div class="brand-detail" name="Moore">
                    <img src="http://www.hejigy.com/Img/brand/108.png" alt="">
                    <div class="brand-detail-text">穆尔</div>
                </div>

                <div class="brand-detail" name="WLT">
                    <img src="http://www.hejigy.com/Img/brand/110.png" alt="">
                    <div class="brand-detail-text">威纶通</div>
                </div>

                <div class="brand-detail" name="YF">
                    <img src="http://www.hejigy.com/Img/brand/111.png" alt="">
                    <div class="brand-detail-text">鹰峰</div>
                </div>

                <div class="brand-detail" name="Lingshi">
                    <img src="http://www.hejigy.com/Img/brand/113.png" alt="">
                    <div class="brand-detail-text">岭士</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hj-brand",
        data(){
            return{
                module:{
                    name:'和稷-品牌专区',
                    id:'hj-brand'
                }
            }
        },
        mounted() {
            let s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'http://www.hejigy.com/Scripts/brand.js';
            document.body.appendChild(s);
        }
    }
</script>

<style scoped>
    /*整站样式*/
    html,body,dl,dd,img,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;border:0;}
    body{font-size: 12px;font-family: '微软雅黑', Arial;min-width: 1423px;top:0px!important;}
    ul,ol,li{ list-style-type:none;}
    img{border:0;vertical-align:middle}
    select,input,select{vertical-align:middle;outline: none;}
    table{border-collapse:collapse;border-spacing:0}
    iframe{border:none;}
    a:link{color:#666666;text-decoration:none;}
    a:visited{color:#666666;text-decoration:none;}
    a:hover{color:#0093ff;text-decoration:none;}
    a:active{color:#0093ff;text-decoration:none;}
    a img{
        border: none;
    }
    .c{clear:both;font-size:0;line-height:0;height:0;visibility:visible;}
    .h{display:none;visibility:visible;}
    .wrap{border:0;padding:0;width:1200px;margin:0 auto;*zoom:1;}
    .wrap:after{clear:both;content:"";display:table;}
    .fix{*zoom:1;}
    .fix:after{clear:both;content:"";display:table;}
    .fl{float:left;}
    .fr{float:right;}
    .posr{position:relative;}
    .btn{font-family:"宋体";font-weight:normal;}
    .px20{height:20px;line-height:20px;}
    /* 编辑器内容样式 凡是编辑器修改区域加上 */
    .editor{line-height:24px;text-align:left;}
    .editor p{text-indent:2em;}
    .editor ol li{list-style-type:circle;margin-left:25px;}
    .editor ul li{list-style-type:square;margin-left:25px;}
    /* 分页样式 */
    .page{text-align:center;margin-top:20px;}
    .page a{display:inline-block;padding:5px 10px;margin-right:10px;color:#fff;border:1px solid black;color:#5e92d3;}
    .page a:hover{background-color:red;color:red;}
    .page a.now{background-color:white;color:black;}

    /* header */
    .section{overflow:hidden;}
    .header{min-height:80px;overflow: hidden;}
    .header h1{width:135px;}
    .logo{padding-top:18px;}
    /*.header .logo_text{width:140px;margin-top:24px;padding-left:5px;}*/
    /*.header .fr{position: absolute;margin-left: 300px;text-align: right;min-width: 900px;}*/
    /*.header .fr .nav .fix{position: relative;min-width: 900px;}*/
    .header .logo_text{margin-top: 24px;padding-left: 14px;height: 34px;color: #7D7D7D;border-left: 1px solid #7D7D7D;font-size: 14px;}
    .header .frr{display: inline-block;text-align: right;min-width: 900px;vertical-align: top;}

    /*margin-top:35px;*/
    .nav{position:relative;line-height: 80px;}
    .nav li{display:inline-block;padding-left:40px;}
    .nav li a{font-size:14px;color:#565656;line-height:14px;display:inline-block;}
    .nav li a:hover{color:#0067B7;}
    .nav .nav_icon{background:#15909c;height:1px;line-height:1px;display:inline-block;position:relative;top:-6px;*top:0px;}

    .home_title{text-align:center;padding-top:50px;letter-spacing: 5px;}
    .home_title-left{font-size:20px;font-weight:400;color:rgba(84,84,84,1);margin-left: 5px}
    .home_title-right{font-size:24px;font-weight:400;color:rgba(149,208,255,1);}

    /* footer */
    .footer {background:#EEEEEE;width:100%}
    /*height:172px;*/
    .contact{background:#EEEEEE;margin: auto;padding-top: 38px;width:964px;color: #7A7A7A;font-size: 14px;}
    .left-one {font-size: 14px;width:380px;float:left;}
    .left-two {font-size: 14px;;width:310px;float:left}
    .right-one {font-size: 14px;width:100px;display: inline-block;margin-bottom: 40px;}
    .right-two {width:100px;float:right;margin-bottom: 40px;}
    .left-one li,.left-two li{
        list-style-type:none;
        padding-bottom: 17px;
        padding-right: 15px;
    }
    .right-one li,.right-two li{
        list-style-type:none;
        padding-top: 20px;
        font-size: 12px;
        text-align: center;
    }
    /*height: 72px;*/
    .copyright{width:1200px;border-top: 1px solid #A0A0A0;margin: auto;padding-top: 18px;}
    .copyright div{font-size: 12px;color: #7A7A7A;line-height: 24px;text-align: center;}
    .copyright div:nth-child(2){padding-bottom: 24px;}

    .home_about{width:250px;}
    .home_about dt{margin-bottom: 24px;}
    .home_about dt a{font-size:18px;color:#fff;font-weight:normal;}
    .home_about dd{color: #eeeeee;line-height: 28px;font-family: "宋体";}
    .home_about .more{color: #fff;display: inline-block;border: 1px solid #cccccc;line-height: 38px;padding: 0 24px;margin-top: 12px;}
    .home_about .more:hover{border-color: #fff;}
    .home_case{width:300px;margin-left:45px;}
    .home_case li{border-top:1px solid #ccc;height:52px;padding:14px 0;}
    .home_case li:first-child{border:0;padding-top:3px;}
    .home_case li img{float: left;margin-right: 18px;}
    .home_case h5{margin-top:-5px;line-height:28px;}
    .home_case h5 a{font-size:14px;color:#fff;font-weight:normal;}
    .home_case .text{line-height:22px;}
    .home_case .text a{color:#dddddd;font-family:"宋体";}
    .home_case .label{color: #cccccc;line-height: 28px;}
    .home_service{width: 230px;margin-left:45px;}
    .home_service a.sub{font-size: 12px;color: #fff;line-height: 38px;width: 98px;display: inline-block;border: 1px solid #cccccc;text-align: center;margin-right: 12px;margin-bottom: 12px;margin-top: 3px;}
    .home_service a.sub:hover{border-color: #fff;}
    .home_contact{margin-left:40px;}
    .home_contact li{color: #ddd;margin-bottom: 14px;}
    .home_contact li i{display:inline-block;width:18px;height:18px;margin-right: 10px;vertical-align: middle;}
    .home_contact li .addres{background: url("http://www.hejigy.com/Images/sprite.png")no-repeat 0 -20px  ;}
    .home_contact li .weibo{background: url("http://www.hejigy.com/Images/sprite.png")no-repeat -20px -20px  ;}
    .home_contact li .email{background: url("http://www.hejigy.com/Images/sprite.png")no-repeat -40px -20px  ;}
    .home_contact li .weixin{background: url("http://www.hejigy.com/Images/sprite.png")no-repeat -80px -20px  ;}
    .home_contact li .call{background: url("http://www.hejigy.com/Images/sprite.png")no-repeat -0px -0px  ;}
    .home_contact li a{color: #ddd;}
    .blogroll{line-height: 28px;color: #999;text-align: center;padding: 30px 0;}
    .blogroll a{color: #999;display:inline-block;}
    .blogroll a:hover{color: #333;}
    .blogroll .copyright{margin-top: 16px;}

    /*inside*/
    .inside_banner{position: relative;}
    .inside_banner_service{background: url("http://www.hejigy.com/Img/products/banner.jpg") no-repeat center;height: 400px;}
    .inside_banner_about{background: url("http://www.hejigy.com/Img/about/banner.jpg") no-repeat center;height: 400px;}
    .inside_banner_brand{background: url("http://www.hejigy.com/Img/brand/brand.jpg") no-repeat center;height: 400px;}
    .inside_banner_mobile{background: url("http://www.hejigy.com/Images/m_banner.jpg") no-repeat center;height: 400px;}
    .inside_banner_solution{background: url("http://www.hejigy.com/Images/sl_banner.jpg") no-repeat center;height: 400px;}
    .inside_banner_news{background: url("http://www.hejigy.com/Img/news/banner.jpg") no-repeat center;height: 400px;}
    .inside_banner_recruitment{background: url("http://www.hejigy.com/Img/advertise/banner.jpg") no-repeat center;height: 400px;}
    .inside_banner_contactus{background: url("http://www.hejigy.com/Img/contact/banner.jpg") no-repeat center;height: 400px;}
    .inside_banner .wrap{height: 100%;}
    .about{overflow: hidden;}
    .about_tab{width: 1200px;margin: 0 auto;position: relative;height: 100%;}
    .about_tab ul{position: absolute;bottom: 0;left: 0;font-size: 0;}
    .about_tab li{display:inline-block;width: 100px;text-align: center;vertical-align: bottom;*display: inline;zoom: 1;}
    .about_tab li a{font-size: 14px;color: #fff;line-height: 40px;}
    .about_tab li.on a{line-height: 100px;}
    .about_tab .blue{background: #43bcc7;}
    .about_tab .green{background: #a6d250;}
    .about_tab .yellow{background: #eab055;}
    .about_tab .orange{background: #e9d356;}
    .about_title{text-align: center;padding-top: 36px;padding-bottom: 36px;}
    .about_main{width: 600px;position: relative;}
    .about_pic{position: relative;width: 490px;}
    .about_pic img{position: absolute;}
    .about_cont{padding-bottom: 30px;margin-bottom: 30px;position: relative;}
    .about_main .about_cont:first-child{border-bottom: 1px dashed #d3d3d3; }
    .about_cont h2{font-size: 26px;color: #333;font-weight: normal;margin-bottom: 5px;}
    .about_cont h4{font-size: 16px;color: #333;font-weight: normal;background: url("http://www.hejigy.com/Images/a03.jpg") no-repeat left bottom;padding-bottom: 8px;margin-bottom: 30px;white-space: nowrap;}
    .about_cont .text{font-size: 14px;color: #333;line-height: 28px;}
    .about_cont li{margin-bottom: 14px;width:300px;float:left;}
    .about_cont li span{background: #4bcdd9;color: #fff;font-size: 10px;padding:0 4px;margin-right: 8px;line-height: 12px;*padding: 2px 4px;}
    .culture{background: url("http://www.hejigy.com/Images/a04.jpg") no-repeat center;min-height: 540px; }
    .culture  .about_cont:first-child{border: 0;}
    .zhizi{background: #f7f7f7;text-align: center;padding-bottom: 74px;}
    .zhizi ul{display: inline-block;*display: inline;zoom: 1;}
    .zhizi li{float: left;margin: 0 13px;}
    /*.jion{background: url("http://www.hejigy.com/Images/a14.jpg") no-repeat center;min-height: 720px;}*/
    .jion .test{border-width: 78px 0;border-style: solid;border-color: #5e92d3 transparent transparent transparent;width: 0;height: 0;  }
    .jion .about_title{position: relative;z-index: 3;font-size: 20px;text-align: left;}
    .jion_recruit_all{display: inline-block;width: 875px;padding-bottom: 30px;}
    .jion_recruit_none{display: none;}
    .jion_duty div{font-size: 16px;line-height:30px;padding-left: 65px;color: #494949;}
    .jion_title_all{float: left;display: inline-block;width: 190px;padding-bottom: 179px;}
    /*height: 36px;*/
    .jion_title{width: 190px;color: #494949;line-height: 36px;font-size: 16px;cursor: pointer;}
    .jion_title span:first-child{display: inline-block;width: 93%;}
    .jion_title_check{color: #0063AE;}
    .jion .jion_red{color: #494949;font-size: 16px;font-weight: bold;padding-top: 18px;}
    .jion .jion_address{color: #494949;font-weight: bold;line-height: 36px;}
    .jion_box{width: 1200px;margin: 0 auto;position: relative;}
    .jion_resume{width: 100%;background:rgba(249,249,249,1);}
    .jion_resume_title{font-size: 20px;padding-top: 28px;}
    .jion_resume_info{font-size: 16px;color: #535353;padding: 20px 0px;line-height: 22px;}
    .jion_resume_info div{padding-right: 120px;display: inline-block;}
    .jion_resume_info div:last-child{padding-right: 0px;}
    .jion_resume_info div a{color: #0063AE;}
    .jion_resume_info div a:hover{text-decoration: underline;}
    .jion_img{position: absolute;top:15px;left: 0;}
    .jion_img>img:first-child{position: relative;top:151px;margin-right:-3px;    }
    .jion_img img{}
    .jion_tab{position: absolute;top:151px;left: 75px;}
    .jion_tab li{float: left;width: 150px;height:150px;line-height:150px;text-align:center;font-size: 20px;color: #fff;background: url("http://www.hejigy.com/Images/a19.png") no-repeat;cursor: pointer;}
    .jion_tab .post{display: none;}
    .jion_tab li:hover{background: url("http://www.hejigy.com/Images/a18.png") no-repeat;}
    .jion_tab li:hover .post{display: block;}
    .jion_tab li:hover .icon{display: none;}
    .jion_tab li.on{background: url("http://www.hejigy.com/Images/a18.png") no-repeat;}
    .jion_tab li.on .post{display: block;}
    .jion_tab li.on .icon{display: none;}
    .jion_info{margin-left: 250px;margin-top: 260px;}
    .jion_info dl{display: none;}

    .job_tab{display: none;width: 540px;}
    .job_tab li{float:left;font-size:20px;color:#333;border-left:2px solid #d9d9d9;margin-right: 16px;padding-left:16px;line-height:20px;}
    .job_tab li:first-child{border:0;padding-left: 0;cursor: auto;}
    .job_tab .on{color: #5e92d3;}
    .job_tab .intro{font-size: 14px;color: #333;line-height: 28px;margin-top: 16px;display: none;}

    .jion .send{font-size: 16px;color: #fff;display: inline-block;width: 160px;line-height: 160px;text-align: center;background: url("http://www.hejigy.com/Images/a17.png") no-repeat;position: absolute;right: 222px;top: 222px;}
    .jion .send2{font-size: 16px;color: #fff;display: inline-block;width: 160px;line-height: 160px;text-align: center;background: url("http://www.hejigy.com/Images/a17.png") no-repeat;position: absolute;right: 0;top: 222px;}
    .case_demo{position: absolute;bottom: -384px;}
    .case_demo li{float:left;width:384px;position:relative;padding:0px;}
    .case_info{position: absolute;bottom: 0;left:0;color: #fff;padding: 10px 20px;}
    .case_info h3{font-size:16px;color:#fff;position:relative;z-index:1;font-weight:normal;padding-bottom:6px;}
    .case_info .text{font-size:12px;color:#ccc;position:relative;z-index:1;line-height:20px;}
    .case_shade_top{position:absolute;top:0;left:0;width:384px;height:100%;background:#000;opacity:0.5;filter:alpha(opacity=50); }
    .case_info .case_icon{display:none;padding:12px 0;}
    .case_info .case_icon img{position:relative;}
    .case_shade{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.5;filter:alpha(opacity=50); }
    .case_type{position:absolute;right: 0;top:100px;width: 200px;}
    .case_type li{float: right;width: 100px;height: 100px;opacity: 0;}
    .case_type li a{text-align: center;font-size: 18px;display: block;line-height: 100px;color: #fff;}
    .case_type .green{background: #43bcc7;}
    .case_type .red{background: #de6764;}
    .case_type .blue{background: #31a0e1;}
    .case_type .purple{background: #6a8bd2;}
    .case_type .orange{background: #9ac047;}
    .case_type .gray{background: #c7a643;}

    .case_more{text-align: center;margin-top: 40px;}
    .case_more a{display: inline-block;font-size: 14px;color: #5e92d3;line-height: 38px;border: 1px solid #5e92d3;display: inline-block;width: 1200px;}

    .crumbs{border-bottom:1px solid #f7f7f7;line-height:40px;color:#999999;font-family:"宋体";}
    .crumbs .icon{display:inline-block;width:14px;height:14px;background: url("http://www.hejigy.com/Images/sprite.png")-80px 4px no-repeat;margin-right:4px;}
    .crumbs a{color:#999;}
    .crumbs a:hover{color:#666;}
    .crumbs .on{color:#666;}
    .case_top{margin-top:40px;}
    .case_top h2{margin-bottom:8px;}
    .case_top h2 a{font-size:16px;color:#5e92d3;font-weight:normal;display:inline-block;margin-right:12px;}
    .case_top h3{font-size:20px;color:#333333;font-weight:normal;margin-bottom:8px;}
    .case_top .date{color:#999;}
    .case_top .intro{width:440px;line-height:26px;color:#999;}
    .case_sign{margin-top:30px;}
    .case_sign .info{line-height:26px;color:#999;margin-top:10px;}
    .case_sign .info a{color:#999;margin-top:10px;display:inline-block;text-decoration:underline;}
    .case_phone{background:url("http://www.hejigy.com/Images/case_phone_bg.jpg") no-repeat center;width:100%;height:882px;padding-top:78px;margin-top:40px;}
    .case_phone_bg{background:url("http://www.hejigy.com/Images/phone_bg2.png") no-repeat center;width:405px;height:723px;margin:0px auto;position:relative;}
    .phone_slider{padding-top:69px;margin-left:28px;width:350px;height:560px;}
    .case_erweima{width:200px;margin:60px auto;border:1px solid #e3e3e3;}
    .case_erweima_btn{background-color:#5e92d3;text-align:center;padding:0px 10px;height:40px;line-height:40px;width:140px;margin:0px auto;}
    .case_erweima_btn a{color:#e3e3e3;}

    .case_erweima2{width:480px;margin:60px auto;}
    .case_erweima2 dl{float:left;margin:0 20px;text-align:center;width:200px;}
    .case_erweima2 dd{line-height:30px;height:30px;width:188px;background-color:#5e92d3;color:#fff;margin:10px auto;}

    a.btn_case_see{width:100%;height:32px;line-height:32px;color:#5e92d3;font-size:14px;background-color:#fff;border:1px solid #5e92d3;text-align:center;display:block;margin:30px auto;}
    .c_back{text-align: center;margin-top: 60px;}
    .c_back img{cursor: pointer;}
    .ser_project ul{margin:40px auto;width:1200px;}
    .ser_project li{float:left;margin-left:40px;position:relative;overflow:hidden;}
    .ser_project li:first-child{margin:0;}
    .blur{filter: blur(4px); -webkit-filter: blur(4px);  -moz-filter: blur(4px);-ms-filter: blur(4px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false); /* IE6~IE9 */}
    .blur_shade{background:url("http://www.hejigy.com/Images/blur.png") no-repeat;position: absolute;top:-600px;left: 0;width: 100%;height: 100%;text-align: center;z-index: 2;opacity: 0;}
    .blur_shade h4{font-size: 20px;color: #333;font-weight: normal;padding-top: 100px;}
    .blur_shade .text{background: url("http://www.hejigy.com/Images/s13.jpg") no-repeat center top ;font-size: 14px;color: #333;margin-top: 8px;padding: 8px 10px 0;}

    .ser_scope{background:#f7f7f7;padding-bottom:70px;}
    .picBox{width:1200px;margin:40px auto;}
    .picBox li{float:left;position:relative;width:400px;display:table;}
    .picBox .ser_info{position:absolute;font-size:16px;color:#333;line-height:40px;text-align:center;width:100%;left:0;}
    .picBox .s1 .ser_info{bottom:0;}
    .picBox .s3 .ser_info{top:0;}
    .picBox .s5 .ser_info{bottom:0;}
    .picBox .ser_shade{background:#fff;opacity:0.6;filter:alhpa(opacity=60);width:100%;height:100%;position:absolute;top:0;left:0;}
    .picBox h2{font-size:16px;color:#333;font-weight:normal;position:relative;z-index:2;}
    .picBox .s2:after{height: 0; width:0;content: "";position: absolute;left:-20px;top:50%;
        border-width:10px;
        border-style: dashed solid   dashed dashed ;
        border-color:transparent #5e92d3   transparent transparent;
    }
    .picBox .s4:after{height: 0; width:0;content:"";position: absolute;right:-20px;top:50%;z-index: 2;
        border-width:10px;
        border-style:  dashed dashed  dashed solid;
        border-color:  transparent  transparent  transparent #5e92d3;
    }
    .picBox .s6:after{height: 0; width:0;content: "";position: absolute;left:50%;top:-20px;
        border-width:10px;
        border-style: dashed    dashed solid dashed ;
        border-color:transparent  transparent #5e92d3 transparent;
    }
    .picBox .intro{position:absolute;left:0;top:0;font-size:14px;line-height:26px;color:#fff;margin:auto 28px;padding-top:36px; }
    .picBox dl{position:absolute;left:0;top:0;font-size:14px;line-height:26px;color:#fff;margin:auto 38px;padding-top:36px; }
    .picBox dt{font-size:18px;margin-bottom: 8px;}
    .picBox dd{display:list-item;list-style-type: circle;white-space: nowrap;}
    .picBox li img{width:400px;height:220px;}
    .sp_box{margin-top:40px;}

    .picScroll-left{ width:1200px;margin: 0 auto;  overflow:hidden; position:relative; padding-bottom: 40px;}
    .picScroll-left .hd{ overflow:hidden; position: absolute;bottom: 0;width: 100%;text-align: center;z-index: 2;}
    .picScroll-left .hd a{display: inline-block;font-size: 20px;font-weight: 200;color: #999;line-height: 38px;border: 1px solid #999;width: 38px;text-align: center;margin: 0 5px;cursor: pointer;}
    .picScroll-left .hd a:hover{color: #333;border-color: #333;}
    .mobile_column{}
    .mobile_column ul{width: 1200px;margin: 40px auto;}
    .mobile_column li{width: 360px;text-align: center;float: left;margin-left: 40px;}
    .mobile_column li:first-child{margin-left: 0;}
    .mobile_column .title{font-size: 16px;color: #222;margin: 10px auto;line-height: 26px;}
    .mobile_column .intro{color: #999;line-height: 22px;width: 320px;margin: 0 auto;}
    .wechat{background: url("http://www.hejigy.com/Images/m06.jpg") no-repeat center top;position:relative;}
    .wechat dl{margin-left:140px;margin-top:300px;float:left;}
    .wechat dt{font-size: 36px;color: #333;margin-bottom: 30px;}
    .wechat dd{font-size: 16px;color: #333;line-height: 30px;}
    .wechat_intro{margin-top: 60px;position: relative;top:40px;overflow: hidden;}
    .wechat_img{width: 540px;float:right;min-height: 680px;overflow: hidden;position: relative;left: 86px;}
    .wechat_img img{position: absolute;right: 0;bottom: 0;}
    .wi_left{width: 460px;margin-left: 78px;position: relative;}
    .wi_left img{position: relative;}
    .wi_right{width: 540px;background: url("http://www.hejigy.com/Images/m10.jpg") no-repeat left top;padding-left: 115px;padding-top: 92px;}
    .wi_right h2{font-size: 36px;font-weight: normal;color: #333;margin-bottom: 30px;}
    .wi_right h3{font-size: 20px;font-weight: normal;color: #333;margin-bottom: 28px;}
    .wi_right .text{font-size: 16px;font-weight: normal;color: #333;line-height: 30px;}
    .solution_list{width: 1200px;margin: 40px auto;}
    .solution_list ul{margin-right: -48px;}
    .solution_list li{float: left;width: 370px;margin-right: 46px;margin-bottom: 38px;position: relative;}
    .solution_list h2{font-size: 20px;color: #333;font-weight: normal;line-height: 48px;border-bottom: 1px solid #5e92d3;}
    .solution_list h2 a{color: #333;}
    .solution_list h2 a:hover{color:#5e92d3;}
    .solution_list .intro{line-height:22px;color: #999;margin-top: 4px;}
    .solution_list .intro a:hover{color:#5e92d3;}
    .solution_list .shade{display: block;width: 370px;height: 120px;}
    .solution_list .solu_img{width: 370px;height: 120px;overflow: hidden;position: relative;cursor: pointer;}

    .solu_img .shade{position: absolute;z-index:3;top:100%;left: 0;width:100%;height: 120px;background:#fff;opacity:0.6;filter:alpha(opacity=60); transition:0.5s all;}
    .solu_img:hover .shade{top: 0;transition:0.6s ease-in-out;}
    .solu_img .img_icon{transform:rotate(360deg);transition:0.6s ease-in-out;position: absolute;top:50%;left: -100%;margin-left: -20px;margin-top: -20px;display: inline-block;z-index: 3; }
    .solu_img:hover .img_icon{left:50%;transform:rotate(3600deg);-webkit-transform:rotate(3600deg);-moz-transform:rotate(3600deg);-o-transform:rotate(3600deg);-ms-transform:rotate(3600deg);transition: .6s ease-in-out;-webkit-transition: .6s ease-in-out;-moz-transition: .6s ease-in-out;-o-transition: .6s ease-in-out;-ms-transition: .6s ease-in-out;}
    .solu_img img{
        transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);-ms-transform:scale(1);
        transition:All .6s ease-in-out;-webkit-transition:All .6s ease-in-out;-moz-transition:All .6s ease-in-out;-o-transition:All .6s ease-in-out;-ms-transition:All .6s ease-in-out;
    }
    .solu_img:hover>img{
        transform:scale(1.4);-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);-ms-transform:scale(1.2);
        transition:All .6s ease-in-out;-webkit-transition:All .6s ease-in-out;-moz-transition:All .6s ease-in-out;-o-transition:All .6s ease-in-out;-ms-transition:All .6s ease-in-out;
    }

    .news_tab{width: 1200px;margin: 32px auto 0;}
    .news_tab ul{margin-right: -40px;}
    /*width:130px;*/
    .news_tab li{display:inline-block;padding: 0px 25px;height:34px;overflow:hidden;text-align: center;line-height: 34px;}
    .news_tab h2{font-size:20px;color:#fff;font-weight:normal;}
    .news_tab .eg{font-size:14px;color:#fff;text-transform: uppercase;padding-bottom:12px;font-family:Arial;}
    .news_tab li:hover{opacity:1;filter:alpha(opacity=100)}
    .news_tab li.sel{opacity:0.8;filter:alpha(opacity=80)}
    .news_tab .cyan{background: #5e92d3;opacity:0.8;filter:alpha(opacity=80)}
    .news_tab .red{background: #de6764;opacity:0.8;filter:alpha(opacity=80)}
    .news_tab .blue{background: #31a0e1;opacity:0.8;filter:alpha(opacity=80)}
    .news_tab .purple{background: #6a8bd2;opacity:0.8;filter:alpha(opacity=80)}
    .news_tab .green{background: #5EA928;opacity:0.8;filter:alpha(opacity=80)}
    .news_tab .black{background: #000000;}
    .news_tab .cyansel{background: #43bcc7;opacity:1;filter:alpha(opacity=100)}
    .news_tab .redsel{background: #de6764;opacity:1;filter:alpha(opacity=100)}
    .news_tab .bluesel{background: #31a0e1;opacity:1;filter:alpha(opacity=100)}
    .news_tab .purplesel{background: #6a8bd2;opacity:1;filter:alpha(opacity=100)}
    .news_tab .greensel{background: #9ac047;opacity:1;filter:alpha(opacity=100)}
    .news_list{width: 1200px;margin: 0 auto;overflow:hidden;padding-top: 30px;}
    .news_list li{background: #f7f7f7;zoom:1;margin-top: 40px;min-height: 188px;display: flex;justify-content: space-around;}
    .news_list .line{display: block;background: #5e92d3;}
    /*.news_list li:after{content: "";clear: both;display: table;}*/
    /*padding: 18px 20px 40px 0;*/
    .news_list_item{float: left; margin-bottom: 20px;width: 550px;display: flex; height: 180px;margin-left: 50px}
    .news_time{background: #5e92d3 ;width: 150px;height: 100%;}
    .news_time .day{display: block;font-size: 70px;color: #fff;font-family: "Impact";text-align: center;padding-top: 18px;}
    .news_time .year{display: block;color: #eee;text-align: center;line-height: 22px;}
    .news_time .author{display: block;color: #eee;text-align: center;line-height: 22px;padding-bottom: 40px;}
    .news_time .type{display: block;text-align: center;padding-top: 6px;margin-top: 4px;}
    .news_time .type a{color: #fff;font-family: '宋体', Arial;}
    .news_cont{width:400px;padding-left: 10px;}
    .news_cont h2{font-size: 20px;font-weight: normal;padding-top: 5px;}
    .news_cont h2 a{color: #333;}
    .news_cont a:hover{color: #5e92d3;}
    .news_cont .demo{line-height: 24px;margin-top: 10px;max-height: 70px;overflow: hidden;}
    .news_cont .vis{color: #999;line-height: 30px;margin-top: 10px;}
    .news_cont .more{float: right;color: #5e92d3;display: inline-block;border: 1px solid #5e92d3;line-height: 30px;padding: 0 20px;}
    .news_more{width: 1200px;margin: 40px auto 80px;text-align: center;}
    .news_more a{display: block;font-size: 14px;color: #5e92d3;border: 1px solid #5e92d3;line-height: 38px;}

    .backg_new{background: #f7f7f7;padding: 1px 0 40px;margin-bottom: -40px;}
    .news_info{width: 1200px;margin: 0 auto;}
    .news_box{width: 840px;}
    .news_title{border-bottom: 1px solid #eeeeee;margin-top: 40px;padding-bottom: 18px;}
    .news_title h2{font-size: 20px;color: #333;font-weight: normal;}
    .news_title .sign{color: #999;margin-top: 12px;}
    .news_title .label{color: #5e92d3;}
    .news_title .mark{padding-right: 20px;}
    .news_page{text-align:center;margin-top:16px;}
    .news_page a{display:inline-block;font-size:20px;font-weight:200;line-height:38px;width:38px;text-align:center;margin:0 0px 0 10px;color:#999;border:1px solid #999;}
    .news_page a:hover{color:#333;border-color:#333;}
    .news_box .demo{font-size: 14px;color: #333;line-height: 30px;margin-top: 30px;}
    .news_box .notice{font-size: 12px;color: #999;padding-top:20px;clear:both;}
    .page_list{border-top: 1px dashed #d3d3d3;margin-top: 16px;padding-top: 10px;margin-bottom: 30px;}
    .page_list li{line-height: 24px;color: #999;}
    .page_list li a{color: #999;}
    .page_list li a:hover{color: #5e92d3;}
    .page_list .return{float: right;font-size: 14px;color: #5e92d3;border: 1px solid #5e92d3;line-height: 38px;padding: 0 20px;margin-top: 6px;}
    .news_menu{width: 240px;background: #f7f7f7;padding: 30px;margin-top: 40px;}
    .news_menu dt{font-size: 20px;color: #333;margin-bottom: 24px;}
    .news_menu dd{border-bottom: 1px dashed #cccccc;margin-bottom: 20px;}
    .news_menu dd h3{color: #333;font-size: 16px;font-weight: normal;margin-bottom: 10px;}
    .news_menu a:hover{color:#5e92d3;}
    .news_menu .text{color: #666;line-height: 24px;margin-bottom: 14px;}
    .news_menu .time{color: #999999;line-height: 24px;margin-bottom: 6px;}
    .news_seek{border:1px solid #fff;display:inline-block;*display:inline;zoom:1;background:none;position:absolute;left:0;top:280px;}
    .news_seek input{border: 0;background: none;color:#fff;width: 0;text-indent: 10px;}
    .news_seek img{padding: 10px;cursor:pointer;}
    .news_img{position: absolute;right: 0;top:76px;}
    .form_msg{height: 400px;width: 420px;position: relative;padding-left: 40px;}
    .form_msg dl{position: relative;z-index: 3;}
    .form_msg dt{font-size: 18px;color: #fff;padding-top: 40px;}
    .form_msg dd{margin-top: 10px;}
    .form_msg .text{border:1px solid #cccccc;background:transparent;color:#ccc;height:32px;width:182px;line-height:32px;text-indent:12px;margin-right:14px;}
    .form_msg .text:focus{border-color:#fff;color:#fff;}
    .form_msg .textarea{color:#ccc;line-height:32px;padding-left:12px;}
    .form_msg .sub_btn{font-size:14px;border:1px solid #fff;background:transparent;color:#fff;height:38px;width:118px;line-height:36px;margin-right:14px;*margin-left:12px;filter:chroma(color=#000000);cursor:pointer;}
    .form_msg textarea{width:371px;border:1px solid #ccc;background:transparent;height:100px;color: #ccc;resize: none;*margin-left: 12px;overflow:auto;}
    .form_msg textarea:focus{color: #fff;border-color: #fff;outline: none;}
    .c_shade{position:absolute;top:0;left:0;background: #fff;opacity: 0.3;filter:alpha(opacity=30);width: 100%;height: 100%;}
    .connect{}
    .connect_column{margin-top: 46px;margin-bottom: 63px;}
    .connect_column li{float: left;text-align: center;width: 280px;height: 218px;margin-left: 26px;position: relative;padding-top: 42px;font-size: 16px;color: #333;line-height: 32px;}
    .connect_column li:first-child{margin-left: 0;}
    .connect_column h2{font-size: 18px;color: #7A7A7A;font-weight: normal;margin-top: 5px;line-height: 18px;margin-bottom: 37px;padding: 0px 10px;}
    .connect_column .info{position: relative;z-index: 2;}
    .connect_column .text{font-size: 14px;color: #7A7A7A;line-height: 14px;padding: 0px 10px;}
    .connect_column .s1{position:absolute;top:0;left:0;width:100%;height:100%;background: #de6764;opacity: 0.2;filter:alpha(opacity=20);}
    .connect_column .s2{position:absolute;top:0;left:0;width:100%;height:100%;background: #58bec8;opacity: 0.2;filter:alpha(opacity=20);}
    .connect_column .s3{position:absolute;top:0;left:0;width:100%;height:100%;background: #9ac047;opacity: 0.2;filter:alpha(opacity=20);}
    .connect_column .s4{position:absolute;top:0;left:0;width:100%;height:100%;background: #31a0e1;opacity: 0.2;filter:alpha(opacity=20);}
    .connect_column .i1{display: inline-block;width: 36px;height: 46px; background: url("http://www.hejigy.com/Images/sprite2.png") no-repeat 0 0;}
    .connect_column .i2{display: inline-block;width: 42px;height: 46px; background: url("http://www.hejigy.com/Images/sprite2.png") no-repeat -38px 0;}
    .connect_column .i3{display: inline-block;width: 40px;height: 46px; background: url("http://www.hejigy.com/Images/sprite2.png") no-repeat -83px 0;}
    .connect_column .i4{display: inline-block;width: 40px;height: 46px; background: url("http://www.hejigy.com/Images/sprite2.png") no-repeat -125px 0;}
    .connect_column a{ color: #333;}
    .connect_share{border-top: 2px solid #43bcc7;width: 120px;margin: 46px auto 0;text-align: center;padding-top: 46px;}
    .connect_share .sh1{display: inline-block;width: 40px;height: 40px;background: url("http://www.hejigy.com/Images/sprite2.png") 0 -48px;margin-right: 9px;}
    .connect_share .sh2{display: inline-block;width: 40px;height: 40px;background: url("http://www.hejigy.com/Images/sprite2.png") -41px -48px;}
    .arrive{background: #f7f7f7;padding-bottom: 50px;}
    .arrive_column_con{width:1150px;overflow:hidden;}
    .arrive_column{margin-left:50px;width:1300px;}
    .arrive_column dl{float:left;width:318px;margin:40px 90px 0 0px;}
    .arrive_column dt{margin-bottom: 40px;}
    .arrive_column dd{font-size: 16px;color: #7A7A7A;line-height: 20px;}
    .bus{font-size: 18px;color: #31a0e1;}
    .bus dt{margin-left: 55px;}
    .bus dd .text{padding-left: 40px;}
    .bus .icon{display: inline-block;width: 32px;height: 32px;background: url("http://www.hejigy.com/Images/sprite2.png") 0 -90px;vertical-align: middle;margin-right: 18px;}
    .taxi{font-size: 18px;color: #de6764;}
    .taxi dt{margin-left: 45px;}
    .taxi dd .text{padding-left: 15px;width: 282px;}
    .taxi .icon{display: inline-block;width: 32px;height: 34px;background: url("http://www.hejigy.com/Images/sprite2.png") -34px -90px;vertical-align: middle;margin-right: 18px;}
    .metro{font-size: 18px;color: #9ac047;}
    .metro dt{}
    .metro .icon{display: inline-block;width: 34px;height: 34px;background: url("http://www.hejigy.com/Images/sprite2.png") -66px -90px;vertical-align: middle;margin-right: 16px;}
    /*联系我们 底部*/
    .contact_footer_left{float: left;width:320px;padding-left: 90px;padding-top: 48px;padding-right:120px;border-right:1px solid rgba(166,166,166,1);}
    .contact_footer_left ul li{color: #7A7A7A;font-size: 14px;margin-bottom: 28px;}
    .contact_footer_left ul li img{padding-right: 10px;}
    .contact_footer_right{float: right;background: url("http://www.hejigy.com/Img/contact/map.jpg") no-repeat center;height: 298px;width: 600px;margin-bottom: 41px;}


    /*case*/
    .container{width:100%;overflow:hidden;*width:100%;overflow:hidden;}
    .da-thumbs {width:100%;position:relative;font-size:0;margin:0 auto;}
    .da-thumbs li{float:left;width:20%;position:relative;overflow:hidden;*width:19.97%;}
    .da-thumbs li a img{display:block;margin:0 auto;position:relative;border:0;}
    .da-thumbs li a>img{width:100%;max-width:100%;transform:scale(1);transition:all 0.6s ease-in-out;}
    .da-thumbs li a:hover>img{transform: scale(1.1);transition: all 0.4s ease-in-out;}
    .da-thumbs li a{overflow:hidden;display:block;}
    .da-thumbs li a div{position:absolute;width:100%;height:100%;left:0;top:0;padding-top:10%;display:none;}
    .da-thumbs li a:hover div{*display: block;}
    .da-thumbs li a div img{position:relative;z-index:2;top:0px;}

    .da-shade{background:#5e92d3;opacity:0.8;position:absolute;width:100%;height:100%;}
    .da-thumbs h2{position:absolute;bottom:0;left:0;width:100%;font-size:16px;color:#fff;font-family:"微软雅黑";font-weight:normal;text-align:center;line-height:40px;z-index:4;}
    .da-thumbs .title_shade{background:#000;opacity:0.5;filter:alpha(opacity=50);position:absolute;z-index:2;bottom:0;left:0;height:40px;width:100%;}
    .da-thumbs li a:hover h2{display:none;}
    .da-thumbs li a:hover .title_shade{display:none;}

    /* case201601 */
    .case_t{text-align:center;padding-top:60px;background:url("http://www.hejigy.com/Images/case_t_line.jpg") repeat-x 0 128px;}
    .case_t_title{color:#000000;font-size:20px;height:56px;line-height:56px;width:72px;text-align:center;background-color:#fff;margin:0px auto;}
    .case_t_line{width:42px;height:1px;line-height:1px;background-color:#6bc1ca;margin:0px auto;}
    .case_type201601{margin-top:60px;position:relative;z-index:1;}
    .case_type201601 ul{width:800px;margin:0px auto;padding-bottom:20px;}
    .case_type201601 li{float:left;width:104px;height:38px;line-height:38px;border:1px solid #fff;text-align:center;margin-right:20px;}
    .case_type201601 li a{font-size:14px;color:#000;}
    .case_type201601 li:hover{border:1px solid #5e92d3;}
    .case_type201601 li:hover a{color:#5e92d3;}
    .case_type201601 li.sel{border:1px solid #5e92d3;}
    .case_type201601 li.sel a{color:#5e92d3;}

    .case_search{width:240px;position:absolute;right:0;top:0px;z-index:1;text-align:right;}
    .case_seek{border:1px solid #4bcdd9;display:inline-block;*display:inline;zoom:1;}
    .case_seek input{border:0;background:none;color:#666;width:0;text-indent:10px;}
    .case_seek img{padding:10px;cursor:pointer;}

    .case_list_201601{width:1600px;overflow:hidden;margin-top:20px;margin-left:auto;margin-right:auto;}
    .portfolio-grid{width:1300px;padding-left:200px;}

    .thumbnail{overflow:hidden;position:relative;display:inline-block;float:left;width:385px;margin-right:20px;margin-top:20px;}

    .thumbnail a.thumbnail_a:hover{cursor:url("http://www.hejigy.com/Images/index201601/more.cur"),crosshair;cursor:url("http://www.hejigy.com/Images/index201601/cases_shi.png") 40 40, crosshair;}
    .projectinfo{position:absolute;z-index:2;top:-40px;left:0;width:100%;height:100%;background:rgb(126,127,115);background:rgba(126,127,115,.4);height:0\9;}
    .thumbnail .meta{width:100%;height:60px;line-height:60px;text-align:left;overflow:hidden;}
    .thumbnail .meta h4{font-size:18px;padding-left:10px;font-weight:normal;width:285px; }
    .thumbnail .meta h4 a{color:#000;}
    .thumbnail .meta .fr{width:80px;text-align:right;padding-right:10px;}
    .thumbnail .meta .fr a{display:inline-block;padding:0px 2px;padding-right:12px;width:20px;height:60px;}
    .thumbnail .meta .fr a.cases_a_pc{background:url("http://www.hejigy.com/Images/cases_ico_pc_b.png") no-repeat center;}
    .thumbnail .meta .fr a.cases_a_phone{background:url("http://www.hejigy.com/Images/cases_ico_phone_b.png") no-repeat center;}
    .thumbnail:hover .meta{background-color:#5e92d3;}
    .thumbnail:hover .meta h4 a{color:#fff;}
    .thumbnail:hover .meta .fr a.cases_a_pc{background:url("http://www.hejigy.com/Images/cases_ico_pc_w.png") no-repeat center;}
    .thumbnail:hover .meta .fr a.cases_a_phone{background:url("http://www.hejigy.com/Images/cases_ico_phone_w.png") no-repeat center;}

    /* contact_pay */
    .pay_t{margin:48px auto 30px auto;width:223px;}
    .pay_list{width:1200px;margin:0px auto;}
    .pay_list table{border-collapse:collapse;border:1px solid #ddd;padding:0px;margin:0px;width:100%;}
    .pay_list table td{padding:12px 0px 20px 10px;margin:0px;border:1px solid #ddd;font-family:"微软雅黑";font-size:14px;color:#333;line-height:31px;}
    .pay_list dt{height:80px;}
    .pay_list dt.dt2{padding-left:12px;}
    .pay_list dd{padding-left:10px;}
    .pay_spec{font-family:"微软雅黑";font-size:14px;color:#333;line-height:31px;width:1200px;margin:30px auto;}

    #superContainer {
        height: 100%;
        position: relative;
        /* Touch detection for Windows 8 */
        -ms-touch-action: none;
        /* IE 11 on Windows Phone 8.pro1*/
        touch-action: none;
    }
    .section{overflow: hidden;}
    .fp-section {
        position: relative;
        -webkit-box-sizing: border-box; /* Safari<=5 Android<=pro3 */
        -moz-box-sizing: border-box; /* <=28 */
        box-sizing: border-box;
    }
    .fp-slide {
        float: left;
    }
    .fp-slide, .fp-slidesContainer {
        height: 100%;
        display: block;
    }
    .fp-slides {
        z-index:1;
        height: 100%;
        overflow: hidden;
        position: relative;
        -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=pro4.pro3 */
        transition: all 0.3s ease-out;
    }
    .fp-section.fp-table, .fp-slide.fp-table {
        display: table;
        table-layout:fixed;
        width: 100%;
    }
    .fp-tableCell {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .fp-slidesContainer {
        float: left;
        position: relative;
    }
    .fp-controlArrow {
        position: absolute;
        z-index: 4;
        top: 50%;
        cursor: pointer;
        width: 0;
        height: 0;
        border-style: solid;
        margin-top: -38px;
    }
    .fp-controlArrow.fp-prev {
        left: 15px;
        width: 0;
        border-width: 38.5px 34px 38.5px 0;
        border-color: transparent #fff transparent transparent;
    }
    .fp-controlArrow.fp-next {
        right: 15px;
        border-width: 38.5px 0 38.5px 34px;
        border-color: transparent transparent transparent #fff;
    }
    .fp-scrollable {
        overflow: scroll;

    }
    .fp-notransition {
        -webkit-transition: none !important;
        transition: none !important;
    }
    .page_next{width:63px;height:63px;position:absolute;bottom:0px;left:50%;margin-left:-40px;z-index:999;opacity:0.6;filter:alpha(opacity=60);
        animation: 3s linear 0s normal none infinite running fade;}


    /* webdesign begin */
    .webdesign1{width:100%;height:100%;background:#4bcdda;}
    .wd_1{width:1000px;height:480px;margin:0px auto;position:relative;}
    .wd_1_text{position:absolute;top:-3000px;left:432px;}
    .wd_1_text2{position:absolute;top:166px;left:2202px;}
    .wd_1_2{position:absolute;top:300px;left:356px;opacity:0.1;filter:alpha(opacity=10);}
    .wd_1_left{position:absolute;bottom:-300px;left:-1000px;}
    .wd_1_right{position:absolute;top:-400px;right:-1000px;}

    .webdesign2{ background:url("http://www.hejigy.com/Images/webdesign2.jpg") no-repeat center; height:100%; width:100%;position:relative;}
    .webdesign3{ background:url("http://www.hejigy.com/Images/webdesign3.jpg") no-repeat center; height:100%; width:100%;position:relative;}
    .webdesign4{ background:url("http://www.hejigy.com/Images/webdesign4.jpg") no-repeat center; height:100%; width:100%;position:relative;}
    .webdesign5{ background:url("http://www.hejigy.com/Images/webdesign5.jpg") no-repeat center; height:100%; width:100%;position:relative;}
    .webdesign6{ background:url("http://www.hejigy.com/Images/webdesign6.jpg") no-repeat center; height:100%; width:100%;position:relative;}
    .webdesign7{ background:url("http://www.hejigy.com/Images/webdesign7.jpg") no-repeat center; height:100%; width:100%;position:relative;}

    /* right contact */
    .right_contact{position:fixed;bottom:60px;right:0px;width:40px;display:none;z-index:100000;}
    .right_contact .r_qq{background:url("http://www.hejigy.com/Images/contact_qq.png") no-repeat center #ececec;width:40px;height:40px;cursor:pointer;}
    .right_contact .r_tel{background:url("http://www.hejigy.com/Images/contact_tel.png") no-repeat center #ececec;width:40px;height:40px;cursor:pointer;}
    .right_contact .r_close{background:url("http://www.hejigy.com/Images/contact_close.png") no-repeat center #f9f9f9;width:40px;height:40px;cursor:pointer;}
    .right_contact .r_close:hover{background:url("http://www.hejigy.com/Images/contact_close2.png") no-repeat center #43bcc7;cursor:pointer;}
    .right_contact .r_show{background:url("http://www.hejigy.com/Images/contact_h.jpg") no-repeat center;width:40px;height:40px;cursor:pointer;}
    .right_contact .right_hide{display:none;}
    .right_contact .sel .r_qq{background:url("http://www.hejigy.com/Images/contact_qq2.png") no-repeat center #43bcc7;}
    .right_contact .sel .r_tel{background:url("http://www.hejigy.com/Images/contact_tel2.png") no-repeat center #43bcc7;}
    .right_contact .r_sub{display:none;position:absolute;right:40px;top:0px;background-color:#43bcc7;padding:20px;line-height:34px;z-index:100000;}
    .right_contact .r_sub_tel{width:110px;top:40px;}
    .right_contact .r_sub_tel span{display:block;font-size:14px;color:#fff;font-family:"微软雅黑";}
    .right_contact .r_top{background:url("http://www.hejigy.com/Images/contact_top.png") no-repeat center #f9f9f9;width:40px;height:40px;cursor:pointer;display:none;}
    .right_contact .r_top:hover{background:url("http://www.hejigy.com/Images/contact_top2.png") no-repeat center #43bcc7;}

    /* right_contact_201601 */
    .right_contact_201601{position:fixed;bottom:300px;right:0px;width:60px;height:240px;z-index:100000;background:url("http://www.hejigy.com/Images/right_bg.png") no-repeat;}
    .right_contact_201601 li{position:relative;cursor:pointer;width:60px;height:60px;}
    .right_contact_201601 li .hover{display:none;}
    .right_contact_201601 .li_top{width:60px;height:60px;background:url("http://www.hejigy.com/Images/right_1.png") no-repeat;}
    .right_contact_201601 .li_tel{width:238px;height:60px;background:url("http://www.hejigy.com/Images/right_2_h.png") no-repeat;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}
    .right_contact_201601 .li_tel .text{color:#fff;font-size:16px;line-height:24px;padding-left:60px;padding-top:6px;}
    .right_contact_201601 .li_qq{width:238px;height:60px;background:url("http://www.hejigy.com/Images/right_3_h.png") no-repeat;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}
    .right_contact_201601 .li_qq .text{color:#fff;font-size:16px;line-height:24px;padding-left:60px;padding-top:6px;}
    .right_contact_201601 .li_close{width:60px;height:60px;background:url("http://www.hejigy.com/Images/right_4.png") no-repeat;}

    .right_contact_201601 .li_tel:hover{margin-left:-178px;width:238px;height:60px;background:url("http://www.hejigy.com/Images/right_2_h.png") no-repeat;}
    .right_contact_201601 .li_qq:hover{margin-left:-178px;width:238px;height:60px;background:url("http://www.hejigy.com/Images/right_3_h.png") no-repeat;}
    .right_contact_201601 li:hover .hover{display:block;}

    /* right nav */
    #fp-nav{position:fixed;z-index:100000;top:50%;opacity:1;}
    #fp-nav.right{right:17px;}
    #fp-nav.left{left:17px;}
    #fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative;}
    .fp-slidesNav ul li{display: inline-block;}
    #fp-nav ul li a,.fp-slidesNav ul li a{display: block;position:relative;z-index:1;width:100%;height: 100%;cursor: pointer;text-decoration: none;}
    #fp-nav ul li a.active span,.fp-slidesNav ul li a.active span {background: #ccc;}
    #fp-nav ul li a span,.fp-slidesNav ul li a span{top:2px;left:2px;width:8px;height:8px;border:1px solid #ccc;background:rgba(0, 0, 0, 0);border-radius:50%;position:absolute;z-index:1;}

    /* 员工天地 */
    .news_list_yuangong{width:100%;background:url("http://www.hejigy.com/Images/news_yuangong_bg.jpg") no-repeat center top;height:800px;margin-top:40px;}
    .news_list_yuangong ul{width:1200px;margin:0px auto;}
    .news_list_yuangong li{width:200px;height:200px;float:left;position:relative;cursor:pointer;overflow:hidden;}
    .news_list_yuangong li .li_caption{position:absolute;left:0;display:none;width:200px;height:200px;overflow:hidden;z-index:2;}
    .news_list_yuangong li.li .li_caption a{font-size:18px;line-height:30px;color:#fff;display:block;padding-top:56px;padding-left:6px;padding-right:6px;}
    .news_list_yuangong li.li .li_t{position:absolute;left:0;z-index:3;text-align:center;width:200px;}
    .news_list_yuangong li.li2 .li2_t{position:absolute;left:0;z-index:3;text-align:center;width:200px;}
    .news_list_yuangong li.li2 .t{font-size:18px;line-height:30px;color:#fff;display:block;padding-top:56px;padding-left:6px;padding-right:6px;}
    .news_list_yuangong li.li2 .date{font-size:14px;line-height:30px;color:#fff;font-family:Arial;}
    .news_list_yuangong li .li2_caption{position:absolute;left:0;display:none;width:200px;height:200px;overflow:hidden;z-index:2;opacity:0.2;filter:alpha(opacity=20);}

    /* kehu info */
    .kehu_info_logo{text-align:center;margin:40px auto;}
    .kehu_spec{font-size:14px;color:#333;line-height:1.8;width:70%;text-align:center;margin:40px auto;}
    .kehu_text_1{background:url("http://www.hejigy.com/Images/kehu_text1.jpg") no-repeat top center;height:23px;width:100%;}
    .kehu_text_2{background:url("http://www.hejigy.com/Images/kehu_text2.jpg") no-repeat top center;height:26px;width:100%;}
    .kehu_text_3{background:url("http://www.hejigy.com/Images/kehu_text3.jpg") no-repeat top center;height:25px;width:100%;}
    .kehu_info_list{margin:30px auto;}
    .kehu_info_list dl{float:left;width:300px;text-align:center;margin:30px 0;}
    .kehu_info_list dt{padding-bottom:18px;}
    .kehu_info_list dd{line-height:2;font-size:14px;color:#444444;}
    .kehu_info_list dd a{line-height:2;font-size:14px;color:#5e92d3;}
    .kehu_piclist{margin:60px auto;}
    .kehu_piclist li{border:5px solid #ddd;width:290px;position:relative;z-index:1;cursor:pointer;float:left;margin:30px 50px;}
    .kehu_piclist li .preview{display:none;}
    .kehu_piclist li:hover{ filter: alpha(opacity=70);-moz-opacity:0.7;opacity:0.7;}
    .kehu_piclist li:hover .preview{display:block;background:url("http://www.hejigy.com/Images/kehu_ico_fangda.png") no-repeat center center; width:50px;height:50px;position:absolute;top:36%;left:120px;}

    /* Easy Slider */
    /* 成功案例 */
    #slider ul, #slider li,
    #slider2 ul, #slider2 li{
        margin:0;
        padding:0;
        list-style:none;
    }
    #slider2{margin-top:1em;}
    #slider li, #slider2 li{
        width:350px;
        height:560px;
        overflow:hidden;
    }
    #prevBtn, #nextBtn,
    #slider1next, #slider1prev{
        display:block;
        width:30px;
        height:77px;
        position:absolute;
        left:-380px;
        top:350px;
        z-index:1000;
        font-size:0px;
    }
    #nextBtn, #slider1next{
        left:730px;
    }
    #prevBtn a, #nextBtn a,
    #slider1next a, #slider1prev a{
        display:block;
        position:relative;
        width:43px;
        height:85px;
        background:url("http://www.hejigy.com/Images/btn_prev.png") no-repeat 0 0;
    }
    #nextBtn a, #slider1next a{
        background:url("http://www.hejigy.com/Images/btn_next.png") no-repeat 0 0;
    }

    /* numeric controls */
    ol#controls{
        margin:156px auto 0px auto;
        padding:0;
        height:28px;
        padding-left:42%;
    }
    ol#controls li{
        margin:0 10px 0 0;
        padding:0;
        float:left;
        list-style:none;
        height:12px;
        line-height:12px;
        width:12px;
    }
    ol#controls li a{
        display:block;
        height:12px;
        width:12px;
        line-height:12px;
        padding:0px;
        text-decoration:none;
        font-size:0px;
        background:url("http://www.hejigy.com/Images/case_ico.png") no-repeat 0px -12px;
    }
    ol#controls li.current a{
        background:url("http://www.hejigy.com/Images/case_ico.png") no-repeat 0px 0px;
    }
    ol#controls li a:focus, #prevBtn a:focus, #nextBtn a:focus{outline:none;}

    /*service 产品与服务*/
    .services_title {text-align: center;padding-top: 30px;}
    .services_nav{list-style: none;height: 33px;margin: auto;padding-bottom: 20px;}
    .services_nav li{display:inline-block;margin-left: 50px;text-align: center;font-size:16px;font-family:MicrosoftYaHeiUI;font-weight:400;color: #949494;cursor: pointer;}
    .wrap .services_active{color: #68ABFA;padding-bottom: 8px;border-bottom: 4px #68ABFA solid;}
    .services_pro_list{list-style: none;width: 100%;}
    .services_pro_list li{float:left;width:280px;height:300px;border:1px solid rgba(190,190,190,1);margin: 0px 9px 29px 9px;cursor: pointer;}
    .services_pro_list li img{width: 260px;height: 230px; margin:10px 0px 10px 10px;}
    .services_pro_list li div{width: 100%;text-align: center;height: 50px;border-top: 1px solid rgba(190,190,190,1);font-size: 14px;color: #565656;
        line-height: 50px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .services_pro_list li:hover div{color: #FFFFFF;background-color: #87BEFF;}
    .services_none{display: none;}
    /*service 成功案例*/
    .services_case{width: 100%;height:883px;background:rgba(224,241,246,1);margin-top: 36px;}
    .services_case ul{position: relative;width: 1260px;padding-top: 82px;}
    .services_case li{float: left;width: 370px;height: 340px;margin-right: 45px;margin-bottom: 40px;cursor: pointer;overflow: hidden;}
    .services_case_title{width:370px;height:40px;background-color:#FFFFFF;font-size:14px;font-family:MicrosoftYaHeiUI;
        font-weight:400;color:rgba(133,133,133,1);line-height:40px;text-align: center;}
    .services_case_mask{position: relative;margin-top:-340px;width: 370px;height: 340px;background:rgba(0,0,0,1);opacity:0.5;display: none;}
    .services_case_info{position: relative;width: 370px;height: 340px;margin-top: -340px;display: none;}
    .services_case_name{text-align: center;padding-top: 52px;}
    .services_case_name div{display:inline-block;background:rgba(255,255,255,1);border-radius:10px;line-height: 28px;font-size: 16px;
        overflow: hidden;text-overflow: ellipsis;white-space: nowrap;max-width: 90%;}
    .services_case_name1 div{color: #292929;padding: 0 8px;}
    .services_case_name2 div{color: #454545;padding: 0 20px;}
    .services_case_name3 div{color: #302F2F;padding: 0 20px;}
    .services_case_name4 div{color: #000000;padding: 0 10px;}
    .services_case_name5 div{color: #010101;padding: 0 20px;}
    .services_case_text{line-height: 28px;font-size: 14px;color: #fff;height: 220px;overflow: hidden;}
    .services_case_text1{width: 320px;margin-left: 28px;padding-top: 23px;}
    .services_case_text2{width: 205px;margin-left: 93px;padding-top: 22px;}
    .services_case_text3{width: 252px;margin-left: 60px;padding-top: 22px;}
    .services_case_text4{width: 326px;margin-left: 23px;padding-top: 20px;}
    .services_case_text5{width: 267px;margin-left: 59px;padding-top: 43px;}

    /*aboutus 关于我们*/
    .aboutus_type{position: relative;float: right;top: 379px;width:861px;height:42px;background:rgba(149,167,111,1);}
    .aboutus_type span{color: #FFFFFF;font-size: 14px;display: inline-block;position: relative;top: 6px;}
    /*height: 702px;*/
    .aboutus_company{margin-top: 82px;background: url("http://www.hejigy.com/Img/about/company_bg.jpg") no-repeat center;background-size: 100% 100%;}
    .aboutus_company_title{text-align: center;padding-top: 10px;}
    .aboutus_company_info{display: inline-block;float: right;margin-right: 86px;color: #606060;font-size: 14px;text-indent: 20px;
        width: 398px;padding-top: 76px;line-height: 28px;padding-bottom: 71px;}
    .aboutus_company_info span{color: #0067BB;font-size: 16px;}
    .aboutus_company_dh{background: url("http://www.hejigy.com/Img/about/dh.jpg") no-repeat center;height: 663px;}
    .aboutus_team{padding-top: 77px;}
    .aboutus_team_left{float: left;padding-bottom: 102px;}
    .aboutus_team_text{width: 338px;margin-left: 22px;padding-top: 40px;text-indent: 20px;
        color: #565656;font-size: 14px;line-height: 28px;font-family: Microsoft YaHei UI;}
    .aboutus_team_right{float: right;width: 800px;padding-top: 25px;}

    /*品牌专区*/
    .brand-nav{width: 100%;text-align: center;}
    .brand-nav ul{list-style: none;margin-bottom: 0;padding-left: 28px;}
    .brand-nav ul li{display: inline-block;color: #3B3B3B;height: 48px;line-height: 48px;text-align: center;font-size: 18px;min-width: 37px;cursor: pointer;}
    .brand-nav ul li code{font-family: '微软雅黑', Arial;}
    .brand-detail-div{width: 100%;overflow: hidden;box-sizing: border-box;border-top: 1px solid #DFDFDF;margin-top: 10px;margin-bottom: 50px;}
    .brand-detail{float: left;width: 16.57%;overflow: hidden;text-align: center;cursor: pointer;
        background-color: white;height: 118px;border: 1px solid #DFDFDF;margin: -1px -1px 0px 0px;}
    .brand-detail_none{display: none;}
    .brand-detail img{vertical-align: middle;overflow: hidden;margin-top: 10px;box-sizing: border-box;}
    .brand-detail img:hover{transform: scale(1.1);}
    .brand-detail-text{text-align: center;padding-top: 20px;padding-bottom: 20px;display: none;}

    /*选择语言*/
    #google_translate_element{position:absolute;top:25px;right:10px;z-index:2000;opacity:0.7;display: none;}
    .skiptranslate>iframe{display: none; }
    .multilingual{font-family:Adobe Heiti Std R;width: 1200px;margin: auto;margin-bottom: 180px;}
    .multilingual-title{padding: 50px 0px;color: #0263AE;font-size: 40px;}
    .multilingual-nav{height: 50px;width: 100%;border: 1px solid #D2D2D2;}
    .multilingual-nav div{display: inline-block;font-size: 16px;color: #4C4C4C;margin: 0 50px 0 20px;padding-top: 10px;padding-bottom: 5px;cursor: pointer;}
    .multilingual-nav div.multilingual-nav-active{color: #0579FB;border-bottom: 4px solid #0579FB;}
    .multilingual-content{border: 1px solid #D2D2D2;border-top: none;height: 380px;width: 100%}
    .multilingual-box{padding-left: 20px;display: none;}
    .multilingual-box-show{display: block;}
    .multilingual-table{width: 100%;font-size: 14px;color: #606060;font-family:MicrosoftYaHei;}
    .multilingual-table td{width: 16.66%;padding-top: 25px;}

    .multilingual-table .goog-te-menu2-item:link div{font-size: 14px;color: #606060;display: inline-block;}
    .multilingual-table .goog-te-menu2-item:hover div{color:#3366cc;background:#ffffff}
    .multilingual-table .goog-te-menu2-item .indicator{display: none;}
    .multilingual-table .goog-te-menu2-item-selected .indicator{display: none;}

    .multilingualBox{position: fixed;background-color: #fff;z-index: 2000;right: 15px;top: 56px;
        width: 80%;height: 500px;visibility: visible;box-sizing: content-box;box-shadow: 0 3px 8px 2px #999999;
        border: 1px solid #6b90da;overflow:scroll;display: none;}
    #choiceLanguage{text-align: left;cursor: pointer;}
    #choiceLanguage a{color: #0066b1;font-size: 14px;}
    #choiceLanguage a img{margin: -2px 5px 0px 5px;}

    #choiceLanguage1{position:absolute;top:25px;right:25px;z-index:2000;opacity:0.7;background-color: #fff;
        border: 1px solid #d5d5d5;border-top: 1px solid #9b9b9b;border-bottom: 1px solid #e8e8e8;
        font-size: 10pt;display: inline-block;padding: 2px 5px;cursor: pointer;zoom: 1;}
    #choiceLanguage1 a{color: #565656;}


    @media all and (max-width:1440px) {
        /*index*/
        .header .logo_text{display:none;}
    }




</style>
