definitionTitles = new Array();
definitionTitles["carl"] = "Joseph Carl Robnett Licklider";
definitionTitles["icn"] = "Intergalactic Computing Network";
definitionTitles["darpa"] = "DARPA";
definitionTitles["bubble"] = "Dot-com company";
definitionTitles["web"] = "Web 2.0";
definitionTitles["lee"] = "Tim Berneres Lee";
definitionTitles["marc"] = "Marc Andreessen";
definitionTitles["net"] = "Netscape Navigator";
definitionTitles["war"] = "Browser Wars";
definitionTitles["doug"] = "Doug Engelbart";
definitionTitles["nls"] = "oN-line System";
definitionTitles["binary"] = "Binary Code";
definitionTitles["tcp"] = "Transmission Control Protocol";
definitionTitles["ip"] = "Internet Protocol"
definitionTitles["frame"] = "Mainframe"
definitionTitles["jaffe"] = "Jeffrey Jaffe"
definitionTitles["ios"] = "iOS"
definitionTitles["cern"] = "CERN"
definitionTitles["enquire"]="ENQUIRE"
definitionTitles["text"]="Hypertext"
definitionTitles["nelson"]="Ted Nelson"
definitionTitles["xhtml"]="XHTML"
 

definitionDefinitions = new Array();
definitionDefinitions["carl"] = "<strong>American computer scientist</strong>";
definitionDefinitions["icn"] = "The first concept of the internet.";
definitionDefinitions["darpa"] = "Defense Advanced Research Projects Agency.  DARPA designs and creates new technologies for the military. ";
definitionDefinitions["bubble"] = "A Dot-com company does a majority of their business transactions online through websites that end in .com hence the name given to them Dot-com.";
definitionDefinitions["web"] = "Web 2.0 utilizes non-static webpages which means that users can give input on websites ie. comments.";
definitionDefinitions["lee"] = "Worked at cern.";
definitionDefinitions["marc"] = "an American entrepreneur, investor, software engineer, and multi-millionaire.";
definitionDefinitions["net"] = "closed source web browser that was popular in the 1990's.";
definitionDefinitions["war"] = "The competition among differnt web browers for dominance over the web usage share in the web browser marketplace. ";
definitionDefinitions["doug"] = "He is an American inventor and an early computer and internet pioneer. ";
definitionDefinitions["nls"] = "It is a collaborative system that allows multiple users to have access to the same computer at the same time.";
definitionDefinitions["binary"] = "is a way of representing text or computer processor instructions by the use of the binary number system's two binary digits 0 and 1.";
definitionDefinitions["tcp"] = "provides orderly deliverly of units of data from a program on one computer to a program on a differnt computer.";
definitionDefinitions["ip"] = "the set of communication that the interent uses.";
definitionDefinitions["frame"] = "Large computer capable of processing large amounts of bulk data and can handle running critial applications.";
definitionDefinitions["jaffe"] = "Dr. Jeff Jaffe is Chief Executive Officer of the World Wide Web Consortium. He is responsible for all of W3C's global operations, for maintaining the interests of all of W3C's stakeholders, and for sustaining a culture of cooperation and transparency, so that W3C continues to be the leading forum for the technical development and stewardship of the Web..";
definitionDefinitions["ios"] = "iOS is the program that runs the touch screen interface and translates the actions of users such as tapping the screen into a virtual action like expanding or shrinking the screen.";
definitionDefinitions["cern"] = "European Organization for Nuclear Research.";
definitionDefinitions["enquire"]= "ENQUIRE allowed users within a closed network to access its' database and had bidirectional links which allowed for notes to be linked together even without the author's awareness and had direct editing to the server.";
definitionDefinitions["text"] = "Text that is displayed on an electronic device and can contain links to other text that the device can reads.";
definitionDefinitions["nelson"] = "Is an American sociologist, philospher and IT sociolosopher.";
definitionDefinitions["xhtml"] = "Extensible Hyper Text Markup Language.";

function showDefinition(toDefine,theLink) {
	var monkey = $(theLink).position();
	$("#defineBox").offset({ top: monkey.top+20, left: monkey.left+30 });			
	if($("#defineWord").html() == definitionTitles[toDefine]) {
		$("#defineBox").toggleClass("appear");
		
	}

	$("#defineWord").html(definitionTitles[toDefine]);
	$("#definition").html(definitionDefinitions[toDefine]);
}

function hideDefinition() {
	$("#defineBox").toggleClass("appear");
	$("#defineWord").html('');
}

