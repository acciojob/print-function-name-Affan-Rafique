//your JS code here. If required.
functionName()
{
	 alert(arguments.callee.name);
}
window.functionName = functionName;