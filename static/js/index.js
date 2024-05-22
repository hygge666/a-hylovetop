console.log("%c欢迎来到友沃可-简记与叙", "color: #6d85c1; font-size: 2.5em;"), $(window).on("load", function() {
    $(".xf_load").length && $(".xf_load").delay(200).fadeOut(500)
}), $(".xf_verify").bind("input propertychange", function() {
    var e = $(this);
    if (/[^\w]/.test(e.val())) {
        var n = e.val().replace(/[^\w]/g, "");
        $(this).val(n)
    }
}), document.oncontextmenu = new Function("event.returnValue=false;");
let information = document.querySelectorAll(".segmented-control .info"),
    divs = document.querySelectorAll(".xf_Show_box .menu_1");
for (let e = 0; e < information.length; e++) information[e].addEventListener("click", function() {
    document.querySelector(".xf_Show_box .menu_2").classList.remove("menu_2"), divs[e].classList.add("menu_2")
});
let lili = document.querySelector(".xf_name .hello"),
    date = new Date,
    h = date.getHours();
lili.innerHTML = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
let address = document.querySelector(".xf_name .address");
async function tianqi() {
    const e = await axios.get("https://api.vvhan.com/api/weather");
    200 === e.status && (address.innerHTML = `${e.data.city}市&nbsp${e.data.info.high}&nbsp${e.data.info.low}`)
}
tianqi();
let xf_inpname = document.querySelector("#xf_inpname");
xf_inpname.addEventListener("change", function() {
    let e = xf_inpname.value.trim(),
        n = /^[\u4e00-\u9fa5]{1,7}$/.test(e);
    if (console.log(n), !n) return xf_inpname.value = "", void swal("昵称只能是中文并且不能超过7个字符！")
});
let xf_inpemail = document.querySelector("#xf_inpemail");
xf_inpemail.addEventListener("focus", function() {
    0 === xf_inpname.value.length && (swal("请输入昵称！"), xf_inpname.focus())
}), xf_inpemail.addEventListener("change", function() {
    let e = xf_inpemail.value.trim();
    if (!/[1-9]\d{7,10}@qq\.com/.test(e)) return xf_inpemail.value = "", void swal("请输入正确的qq邮箱格式")
});
let xf_inpmessage = document.querySelector(".xf_inpmessage"),
    useCount = document.querySelector(".useCount"),
    controls = document.querySelector(".controls");
xf_inpmessage.addEventListener("focus", function() {
    0 === xf_inpemail.value.trim().length && (xf_inpemail.focus(), swal("请输入QQ邮箱"))
}), xf_inpmessage.addEventListener("input", function() {
    useCount.innerHTML = this.value.length
}), xf_inpmessage.addEventListener("focus", function() {
    controls.style.display = "block", xf_inpmessage.value.trim().length > 20 && swal("请输入20以内的文字")
});
let yanzheng = document.querySelector(".xf_verify_code");

function validation() {
    let e = "";
    for (let n = 0; n < 6; n++) e += Math.floor(10 * Math.random());
    return e
}
yanzheng.innerHTML = validation();
let xf_verify_code = document.querySelector(".xf_verify_code");
xf_verify_code.addEventListener("click", function() {
    yanzheng.innerHTML = validation()
});
let verificationCode = document.querySelector(".xf_verify");
verificationCode.addEventListener("blur", function() {
    if (verificationCode.value.trim() !== yanzheng.innerHTML) return swal("验证码有误！"), void(verificationCode.value = "")
});
let button = document.querySelector(".xf_submit"),
    username = "",
    qqemail = "",
    info = "",
    img = "",
    ul = document.querySelector(".leave");
button.addEventListener("click", function(e) {
    if (e.preventDefault(), 0 === xf_inpname.value.length || 0 === xf_inpemail.value.length || 0 === xf_inpmessage.value.length || 0 === verificationCode.value.length) return void swal("康康是不是少填了什么？");
    username = xf_inpname.value, qqemail = xf_inpemail.value, info = xf_inpmessage.value;
    const n = qqemail.replace("@qq.com", "");
    img = `https://q2.qlogo.cn/headimg_dl?dst_uin=${n}&spec=100`, data = [], data.unshift({
        username: username,
        imgSrc: img,
        date: (new Date).toLocaleTimeString(),
        comments: info
    });
    for (let e = 0; e < data.length; e++) {
        let n = document.createElement("li");
        n.innerHTML = `<div class="xf_sm_box xf_mimic_internal">\n                                  <img src=${data[e].imgSrc} alt="头像" id="ha">\n                                <span>${data[e].username}</span>\n                                <span>${dayjs(new Date).format("YYYY-MM-DD")}</span>\n                                <p>${data[e].comments}</p>\n                            </div>`, ul.insertBefore(n, ul.children[0])
    }
    xf_inpname.value = "", xf_inpemail.value = "", xf_inpmessage.value = "", verificationCode.value = ""
});
var s1 = "2022-06-18";
s1 = new Date(s1.replace(/-/g, "/")), s2 = new Date;
var days = s2.getTime() - s1.getTime(),
    number_of_days = parseInt(days / 864e5);
document.getElementById("xf_time").innerHTML = number_of_days, $(window).scroll(function() {
    var e = $(window).scrollTop();
    $(window).width();
    e > 0 ? $("#xf_GoTop").css("display", "block") : $("#xf_GoTop").css("display", "none")
}), $("#xf_GoTop").click(function() {
    $(window).scrollTop();
    $("body,html").animate({
        scrollTop: 0
    }, 500)
});
var dark_mode = function() {
    window.darkMode.init({
        toggle: document.querySelector(".dark-mode-toggle"),
        classes: {
            light: "light",
            dark: "dark"
        },
        default: "light",
        storageKey: "example_dark_mode_pref",
        onInit: function(e) {
            e.style.visibility = "visible"
        },
        onChange: function(e) {
            console.log("启动昼夜模式：" + e)
        }
    })
};

function my_friend() {
    window.open("../../friend.html")
}
dark_mode(), $(function() {
    $(".my-wx").eq(0).click(function() {
        $(".wx_picture").is(":hidden") ? $(".wx_picture").fadeIn(1e3).show() : $(".wx_picture").hide(0)
    }), $(document).click(function(e) {
        var n = $(".my-wx");
        n.is(e.target) || 0 !== n.has(e.target).length || $(".wx_picture").hide(0)
    })
});