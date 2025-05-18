// Get variable value from VariableManager
var myVar = context.variableManager.getValue("v_uni_name_1");
if (myVar==null) {
        context.fail("Variable 'myVar' not found");
}


for(x=1;x<=context.variableManager.getValue("v_uni_name_matchNr");x++)
logger.debug("myVar="+context.variableManager.getValue("v_uni_name_" + x));