var ClozeCard = function (fullText, cloze){
	this.fullText=fullText;
	this.cloze=cloze;
	this.partial = function () {
		if (this.fullText.includes(this.cloze)) 
			return fullText.replace (cloze, "...");
		else
			return "Error! Cloze is not in the statement.";
	} 
};


module.exports = ClozeCard;