<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import Banner_2 from "/public/img/Banner_2.jpg"
import Banner_3 from "/public/img/Banner_3.jpg"
import Banner_5 from "/public/img/Banner_5.jpg"

const slides = [
    { id: '1', src: Banner_2 },
    { id: '2', src: Banner_3 },
    { id: '3', src: Banner_5 },
]

const settings = {
    itemsToShow: 1,
    snapAlign: 'center',
}
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const breakpoints = {
    // 700px and up
    700: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
}

</script>

<template>
    <link rel="stylesheet" id="css" href="/public/css/bootstrap.min.css" type="text/css" media="all" />
    <div class="wrapper">
        <div class="tt_l tt_full  c_bg">
            <div class="tt_l tt_full">
                <div class="tt_l tt_full tt_txt_seo Parent zoomIn" style="visibility: visible; animation-name: zoomIn;">
                    <div style="display: none;">&nbsp;</div>
                    <h1>เซ็กซี่บาคาร่า NIGOAL69 บาคาร่า คาสิโนออนไลน์รายใหญ่ที่สุด</h1>
                    <p>&nbsp;</p>
                    <p>หาเว็บเล่นบาคาร่าออนไลน์อยู่ใช่ไหม ที่นี่ NIGOAL69 คาสิโนออนไลน์ระดับพรีเมี่ยม
                        ที่มีสาวสวยมาแจกไพ่ ระบบฝาก-ถอน Auto 10 วินาที ไม่ต้องรอ คุณลูกค้าต้องลองแล้วจะรู้ว่า
                        เราไม่ได้โฆษณาเกินจริง พนักงาน 100คู่สายดูแลลูกค้า 7/24 ไม่มีวันหยุด
                        เราเน้นคอนเซปไปที่การเล่นบาคาร่า รูเล็ต ไฮโล ไพ่เสือมังกร โดยให้สาวๆสวยๆ เพื่อมาแจกไพ่
                        คอนเซปนี้ชื่อว่า Sexy baccarat หรือที่เรียกว่าเซ็กซี่บาคาร่า
                        เราเน้นบริการให้ผู้เล่นได้พบกับการแปลกใหม่จากเดิมที่เบื่อๆหน้าดิลเลอร์ในการแจกไพ่
                        เราเลยได้ทำการ เอาสาวๆสวยๆใส่บิกินี่ แต่ละสีแต่ละวันสีสดใสมาแจกไพ่
                        ทำให้เพื่อนๆได้รับประสบการณ์การเดิมพันใหม่ๆที่คุณตื่นตาตื่นใจไม่เคยเจอที่คาสิโนไหนแน่นอน
                        มาสนุกกับเราได้เลย<br><img class="alignnone wp-image-6663 size-full"
                            src="/public/img/brand1-1.png" alt="" width="601" height="57"></p>
                </div>
            </div>

            <div class="tt_l tt_full p_slide mt-10">
                <div class="wrapper">
                    <div class="tt_l tt_full">
                        <a href="/เกมออนไลน์">
                            <img width="980" height="490" src="/public/img/Banner_1.png">
                        </a>
                    </div>
                </div>
            </div>

            <Carousel :autoplay="2000" :items-to-show="2.5" :wrap-around="true" v-bind="settings"
                :breakpoints="breakpoints" class="tt_l tt_full slide_a mt-10">
                <Slide v-for="slide in slides" :key="slide.id">
                    <div class="carousel__item">
                        <img v-bind:src="slide.src" alt="">
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <!-- <Pagination /> -->
                </template>
            </Carousel>

            <div class="tt_l tt_full g_ct mt-10">
                <div class="tt_l tt_full  ct_home">
                    <h2 class="tt_l tt_full  hx_slot">"NIGOAL69 CASINO Game ที่มีในเว็บเรา"</h2>
                    <div class="tt_l tt_full ar_gx"></div>
                    <div class="tt_l tt_g4x banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="SEXY GAME" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278" src="/public/img/sg.png">
                                <figcaption>
                                    <img width="228" height="278" src="/public/img/sg.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn  last2x"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="SA GAMING" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278" src="/public/img/sa.png">
                                <figcaption>
                                    <img width="228" height="278" src="/public/img/sa.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="PP Casino" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278"
                                    src="/public/img/sx66.png">
                                <figcaption>
                                    <img width="228" height="278"
                                        src="/public/img/sx66.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn  last2x  last"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="DREAM GAMING" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278"
                                    src="/public/img/dream.png">
                                <figcaption>
                                    <img width="228" height="278"
                                        src="/public/img/dream.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="AMB POKER" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278"
                                    src="/public/img/amb-poker.png">
                                <figcaption>
                                    <img width="228" height="278"
                                        src="/public/img/amb-poker.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn  last2x"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="LALIKA" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278"
                                    src="/public/img/LLK.png">
                                <figcaption>
                                    <img width="228" height="278"
                                        src="/public/img/LLK.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="SBO" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278"
                                    src="/public/img/sbo.png">
                                <figcaption>
                                    <img width="228" height="278"
                                        src="/public/img/sbo.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn  last2x  last"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="WM CASINO" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278" src="/public/img/wm.png">
                                <figcaption>
                                    <img width="228" height="278" src="/public/img/wm.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="EVOLUTION " href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278" src="/public/img/ev.png">
                                <figcaption>
                                    <img width="228" height="278" src="/public/img/ev.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn  last2x"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="KINGMAKER *" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278"
                                    src="/public/img/km.png">
                                <figcaption>
                                    <img width="228" height="278"
                                        src="/public/img/km.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="TFGAMING" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278"
                                    src="/public/img/tf1-min.png">
                                <figcaption>
                                    <img width="228" height="278"
                                        src="/public/img/tf1-min.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="tt_l tt_g4x banner_hover Parent zoomIn  last2x  last"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="PRETTY GAME" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="228" height="278" src="/public/img/ptg.png">
                                <figcaption>
                                    <img width="228" height="278" src="/public/img/ptg.png">
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>

            </div>
            <div class="tt_l tt_full g_ct mt-10">
                <div class="tt_l tt_full title_page tx_center">
                    <h2 class="tt_l">ขั้นตอนการสมัครเล่นบาคาร่าออนไลน์ที่ NIGOAL69
                        มาร่วมเป็นส่วนหนึ่งของสมาชิกคาสิโนด้วยกัน </h2>
                </div>
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full tt_txt_seo img_2x Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <div style="display: none;">&nbsp;</div>
                        <p style="text-align: center;">
                            <img style="height: 400px; width: auto;" class="wp-image-5017  alignnone"
                                src="/public/img/Model_01.png" alt="" width="391" height="326">&nbsp; &nbsp;
                            <a href="https://line.me/R/ti/p/@147ucewm?oat_content=url&ts=06181339">
                                <img class="alignnone size-full wp-image-1389" src="/public/img/howto2.png" alt=""
                                    width="383" height="400">
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="tt_l tt_full g_ct mt-10">
                <div class="tt_l tt_full title_page tx_center">
                    <h2 class="tt_l">ข้อดีของการเป็นสมาชิกคาสิโน NIGOAL69 เซ็กซี่บาคาร่าที่สาวสวยที่สุด </h2>
                </div>
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full tt_txt_seo img_2x Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <p style="text-align: center;">
                            <img class="wp-image-5019  alignnone" style="height: 400px; width: auto;"
                                src="/public/img/Model_11.png" alt="" width="419" height="349">
                            <a href="/เกมออนไลน์">
                                <img class="alignnone wp-image-1151" src="/public/img/Banner_5.jpg" alt="" width="360"
                                    height="345">
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="tt_l tt_full g_ct mt-10">
                <div class="tt_l tt_full title_page tx_center">
                    <h2 class="tt_l">กติกาการเล่นบาคาร่าบน NIGOAL69 และวิธีเล่น NIGOAL69 Baccarat</h2>
                </div>
                <div class="tt_l tt_full">
                    <div class="tt_l tt_full tt_txt_seo Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <div style="display: none;">&nbsp;</div>
                        <p><img class="size-full wp-image-981 aligncenter" src="/public/img/content-index-4-1.png"
                                alt="" width="1000" height="380"></p>
                        <p><a>กติกาไพ่บาคาร่า จะมีการแจกไพ่โดยการหงายไพ่ 2 ใบทั้งฝ่ายผู้เล่นและฝ่ายเจ้ามือ
                                ถ้าสองใบแรกได้ 1แต้ม ถึง 5แต้ม จั่ว , 6แต้ม หรือ 7แต้ม อยู่ , 8แต้ม หรือ 9แต้ม
                                อยู่(แนชเชอรัล) ไม่ต้องจั่วไพ่อีกก็เหมือนกับการนับแต้มไพ่ป๊อกเด้ง ในไพ่บาคาร่าถือว่า 9
                                เป็นไพ่สูงสุด 6</a></p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div class="tt_l tt_full g_ct  mt-10">
                <div class="tt_l tt_full  ct_home">
                    <h2 class="tt_l tt_full  hx_slot">สาวสวยใส่บิกินี่แจกไพ่
                        ความบันเทิงในคาสิโนออนไลน์เท่านั้น</h2>
                    <div class="tt_l tt_full ar_gx"></div>
                    <div class="tt_l tt_g3b bm1_1 banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-1.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-1.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_2 banner_hover Parent zoomIn  last2x"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-2.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-2.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_3 banner_hover Parent zoomIn   last"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-3.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-3.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_4 banner_hover Parent zoomIn  last2x"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-4.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-4.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_5 banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-5.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-5.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_6 banner_hover Parent zoomIn  last2x  last"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-6.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-6.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_7 banner_hover Parent zoomIn"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-7.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-7.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_8 banner_hover Parent zoomIn  last2x"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-8.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-8.png">
                                </figcaption>
                            </figure>
                            <h3>บาคาร่าเกมส์</h3>
                        </a>
                    </div>

                    <div class="tt_l tt_g3b bm1_9 banner_hover Parent zoomIn   last"
                        style="visibility: visible; animation-name: zoomIn;">
                        <a title="ไฮโลออนไลน์" href="/เกมออนไลน์">
                            <figure class="imghvr-fold-up">
                                <img width="305" height="121" src="/public/img/content-index-5-9.png">
                                <figcaption>
                                    <img width="305" height="121" src="/public/img/content-index-5-9.png">
                                </figcaption>
                            </figure>
                            <h3>ไฮโลออนไลน์</h3>
                        </a>
                    </div>



                    <div class="tt_l tt_full ">
                        <h2 class="tt_l tt_full  hx_slot">เล่นบาคาร่าออนไลน์สดๆ ผ่านหน้าจอไปพร้อมกันที่ NIGOAL69</h2>
                        <div class="tt_l tt_full ar_gx"></div>
                        <div class="tt_l tt_g3b banner_hover bm_1 Parent zoomIn"
                            style="visibility: visible; animation-name: zoomIn;">
                            <a title="บาคาร่าเกมส์" href="/เกมออนไลน์">
                                <figure class="imghvr-fold-up">
                                    <img width="305" height="191" src="/public/img/content-index-6-1.png">
                                    <figcaption>
                                        <img width="305" height="191" src="/public/img/content-index-6-1.png">
                                    </figcaption>
                                </figure>
                                <h3>บาคาร่าเกมส์</h3>
                            </a>
                        </div>

                        <div class="tt_l tt_g3b banner_hover bm_2 Parent zoomIn  last2x"
                            style="visibility: visible; animation-name: zoomIn;">
                            <a title="เสือมังกร" href="/เกมออนไลน์">
                                <figure class="imghvr-fold-up">
                                    <img width="305" height="191" src="/public/img/content-index-6-2.png">
                                    <figcaption>
                                        <img width="305" height="191" src="/public/img/content-index-6-2.png">
                                    </figcaption>
                                </figure>
                                <h3>เสือมังกร</h3>
                            </a>
                        </div>

                        <div class="tt_l tt_g3b banner_hover bm_3 Parent zoomIn   last"
                            style="visibility: visible; animation-name: zoomIn;">
                            <a title="ไฮโลออนไลน์" href="/เกมออนไลน์">
                                <figure class="imghvr-fold-up">
                                    <img width="305" height="191" src="/public/img/content-index-6-3.png">
                                    <figcaption>
                                        <img width="305" height="191" src="/public/img/content-index-6-3.png">
                                    </figcaption>
                                </figure>
                                <h3>ไฮโลออนไลน์</h3>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.carousel__item {
    min-height: auto;
    width: 100%;
    background-color: transparent;
    color: var(--vc-clr-white);
    font-size: 20px;
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
}

.carousel__item img {
    width: 100%;
    border-radius: 10px;
}

.carousel__slide {

}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    /* border: 5px solid white; */
}

.carousel__icon {
    fill: white;
}
</style>
