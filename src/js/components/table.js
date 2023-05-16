class tableComponent{
    /**
     * 表格组件的构造器
     * @param {Object} tableComponent
     */
    constructor(TABLE_SETTINGS){
        this.TABLE_SETTINGS=TABLE_SETTINGS;
        this.dispError("");
        
    }

    /**
     * 生成列表的html字符串
     * @returns 列表的html字符串
     */
    appendLogin(){
        let tableHeaderHTML=this.makeLoginForm();
        let tableBodyHTML=this.makeLoginImage();
        let tableFootHTML=this.makeLogin();
    
        return tableHTML;
    }

    /**
     * 组装好一个表头
     * @returns 表头的html字符串
     */
    tableHeaderHTML(){
        let str="";
        str+="<div class=\"card-header\">";
        str+="<i class=\"fa fa-area-chart\"></i> Area Chart Example</div>";
        str+="<div class=\"card-body\">";
        return str;
    }
    
    /**
     * 组装好一个表身
     * @returns 表身的html字符串
     */
    tableBodyHTML(){
        let str="";
        str+="<div class=\"card-body\">";
        str+="<div class=\"table-responsive\">";
        str+="<table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">";
        str+="<thead>";
        str+="<tr>";
        str+="<th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start date</th><th>Salary</th>";
        str+="<tr>";
        str+="</thead>";
        str+="<tfoot>";
        str+="<tr>";
        str+="<th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start date</th><th>Salary</th>";
        str+="<tr>";
        str+="</tfoot>";
        str+="<tbody>";
        str+="<tr>";
        // 数据
        str+="<td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td> <td>61</td><td>2011/04/25</td><td>$320,800</td>";
        str+="</tr>";
        str+="</tbody></table></div></div>";
        return str;
    }

    /**
     * 组装好一个表foot
     * @returns 表foot的html字符串
     */
        tableFootHTML(){
            let str="";
            str+="";
            str+="";
            str+="";
            str+="";
            str+="";
            str+="";
            str+="";
            str+="";
            str+="";
            return str;
        }
        
    /**
     * 
     * @param {String} name - 表单名
     * @param {String} url - php处理脚本
     * @param {String} method - 提交方式
     * @param {String} userName - 登录名命名
     * @param {String} userPwd - 密码命名
     * @param {String} btnLogin - 登录按钮的id命名
     * @returns 登录表单html串
     */
    makeLoginForm(name,url,method,userName,userPwd,btnLogin){
        let str="";
        str+="<form action=\""+url+"\" method=\""+method+"\" id=\""+name+"\" name=\""+name+"\">";
        str+="<input type=\"text\" placeholder=\"请输入用户名\" name=\""+userName+"\" id=\""+userName+"\">";
        str+="<input type=\"password\" placeholder=\"请输入密码\" name=\""+userPwd+"\" id=\""+userPwd+"\">";
        str+="<input type=\"button\" value=\"登录\" id=\""+btnLogin+"\">";
        str+="<div class=\"errors\" id=\"loginError\"></div>";
        str+="</form>";
        return str;
    }



}
