function countWords(para) {
    return para.trim().split(/\s+/).length;
}
console.log(countWords("This is a simple paragraph."));
