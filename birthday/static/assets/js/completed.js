$(document).ready(function(){
    $('#completedModal').modal('show')

    setTimeout(function(){
        $("#final-content").append("<p>这几次做的东西和往年有些不一样，虽然可能没有视频那么耀眼和感人，但是付出的时间与精力远比其高出好多，希望你会喜欢。</p>");
        $("#final-content").append("<p>如果你有注意的话，有两个彩蛋，一个是在Java里面图片的文件名，如果连起来的话就是 “遗失的回忆里，你的身影，诠释着今天的快乐，和明天的未来”。（我语文不是很好，见谅）</p>");
        $("#final-content").append("<p>另外你个彩蛋比较难看出来，你最后拿到的数字按顺序是“19,18,11,12”，分别对应字母“S,R,K,L”，也就是“生日快乐”。</p>");
        $("#final-content").append("<p>一年一年的过去了，我也19了，我立志在今年做个大一点的项目，我一定会做到的。</p>");
        $("#final-content").append("<p>我虽然人不在中国，但是我每时每刻都理解你的辛苦，新开一个项目不容易，我们一起加油吧。</p>");
        $("#final-content").append("<p>岁数虽然说来不算什么，我怎么算都才19，但是每当我想到那些早年成功的人，我就会充分意识到自己的不足。</p>");
        $("#final-content").append("<p>有些人可能会说慢慢来，不要累坏了自己，但是我知道“要对成功有像对活下去一样的渴望，才方可成功”</p>");
        $("#final-content").append("<p>不管怎么样，还是祝你生日快乐，Happy Birthday!</p>");
        $('#finalModal').modal('show')
    }, 28000)
});