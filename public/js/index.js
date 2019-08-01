window.onload = function() {

    $('#btn2').click(function() {
        $.ajax({
            url: '/student',
            data: {},
            success: function(res) {
                if (res.success) {
                    renderStudent(res.student)
                }
            }
        })
    })

    $('#btn1').click(function() {
        $.ajax({
            url: '/info',
            data: {},
            success: function(res) {
                if (res.success) {
                    renderCourse(res.info)
                }
            }
        })
    })

    function renderStudent(data) {
        var str = ''
        data.forEach(function(item) {
            str += '<li>姓名：' + item.name + '，性别：' + item.sex + '，年龄：' + item.age + '</li>'
        })
        $('#studentList').html(str)
    }

    function renderCourse(data) {
        var str = ''
        data.forEach(function(item) {
            str += '<li>身高：' + item.height + '，体重：' + item.weight + '</li>'
        })
        $('#courseList').html(str)
    }

    // 请求看query参数就可以了，跟查询界面的参数差不多

    $('#btn3').click(function() {
        $.ajax({
            url: '/api',
            data: {
                query: `query{
            student{
              _id
              name
              sex
              age
            }
            info{
              title
              desc
            }
          }`
            },
            success: function(res) {
                renderStudent(res.info.student)
                renderCourse(res.info.info)
            }
        })
    })
}