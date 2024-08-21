<script setup>
let topbar_open = true;

// functions
function open_close() {
        if (topbar_open) {
                topbar_open = false;
                document.getElementById("close_topbar_l").style.display = "none";
                document.getElementById("open_topbar_l").style.display = "block";

                document.getElementById("tbl-1").style.display = "none";
                document.getElementById("tbl-2").style.display = "none";
                document.getElementById("tbl-3").style.display = "none";
                document.getElementById("tbl-4").style.display = "none";
                document.getElementById("tbl-5").style.display = "none";
                document.getElementById("tbl-6").style.display = "none";
                document.getElementById("tbl-7").style.display = "none";
                document.getElementById("tbl-8").style.display = "none";
        } else {
                topbar_open = true;
                document.getElementById("close_topbar_l").style.display = "block";
                document.getElementById("open_topbar_l").style.display = "none";

                document.getElementById("tbl-1").style.display = "block";
                document.getElementById("tbl-2").style.display = "block";
                document.getElementById("tbl-3").style.display = "block";
                document.getElementById("tbl-4").style.display = "block";
                document.getElementById("tbl-5").style.display = "block";
                document.getElementById("tbl-6").style.display = "block";
                document.getElementById("tbl-7").style.display = "block";
                document.getElementById("tbl-8").style.display = "block";
        }
}

</script>

<template>
        <div id="topbar2" class="fxx" style="position: fixed; top: 230px;">
                <div id="close_topbar_l" class="tt_btn_close2" @click="open_close"><i class="fa fa-times"></i></div>
                <div id="open_topbar_l" class="tt_btn_open2" @click="open_close"><i class="fa fa-plus"></i></div>

                <a id="tbl-1" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/b1-min-1.jpg"></a>
                <a id="tbl-2" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/b5-min.jpg"></a>
                <a id="tbl-3" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/jerry-brand.png"></a>
                <a id="tbl-4" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/llk-brand.png"></a>
                <a id="tbl-5" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/allbrand.jpg"></a>
                <a id="tbl-6" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/sbo-1.png"></a>
                <a id="tbl-7" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/pt2.png"></a>
                <a id="tbl-8" class="tt_l tt_img_fixed2" style="margin-bottom:5px;" href="/โปรโมชั่น"><img
                                src="/public/img/WMCASINO.png"></a>
        </div>
</template>