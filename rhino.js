var currentPackageName = common.getlpparam().packageName;
//请手动将同方法的hook移至同一个hook代码内，否则后面的不会生效
if (currentPackageName == 'name.gudong.think') {
    //永久会员，所有功能正常使用！
common.hookMethod('name.gudong.account.entity.AccountSession', 'getDealLineTime', [], function (param) {
     param.setResult('永久有效');
}, function (param) {
    
}); 

common.hookMethod('name.gudong.account.entity.AccountSession', 'isPro', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('name.gudong.account.a', 'x', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 


} 
