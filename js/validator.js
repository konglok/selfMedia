/**
 * Created by huiyeye on 2016/6/23.
 */
$(function () {
    $('form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            //组织联络人
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },

                    regexp: {
                        regexp: /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/,
                        message: '中文或英文,中文和英文不能同时出现,长度在20个字符以内'
                    }
                }
            },
            //邮件
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '邮箱地址格式有误'
                    }
                }
            },
            //身份证
            id:{
                validators: {
                    notEmpty: {
                        message: '身份证号不能为空'
                    },
                    regexp: {
                        regexp: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                        message: '身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X '
}
                }
            },
            //联络人电话
            phone:{
                validators: {
                    notEmpty: {
                        message: '电话不能为空'
                    },
                    regexp:{
                        regexp: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
                        message:'不能有空格,不是正确的手机号码'
                    }
                }
            },
            //账号
            account:{
                validators: {
                    notEmpty: {
                        message: '账号不能为空'
                    },
                    regexp:{
                        regexp: /^[a-zA-z]\w{3,15}$/,
                        message:'字母、数字、下划线组成，字母开头，4-16位'
                    }
                }
            },
            name:{
                validators: {
                    notEmpty: {
                        message: '自媒体名称不能为空'
                    },
                    regexp:{
                        //regexp: /^([\u4e00-\u9fa5]{1,10})$/,
                        regexp: /^.{1,10}$/,
                        message:'字数在10个以内'
                    }
                }
            },
            intro:{
                validators: {
                    notEmpty: {
                        message: '自媒体简介不能为空'
                    },
                    regexp:{
                        regexp: /^.{0,20}$/,
                        message:'字数在20个以内'
                    }
                }
            }

        },
        submitHandler: function (validator, form, submitButton) {
            alert("submit");
            //function toSubmit(){
            //    location.href= "check.html";
            //}
        }
    });
});