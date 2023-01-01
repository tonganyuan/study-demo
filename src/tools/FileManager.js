import axios from "axios";
const FileManager = {
    path: process.env.BASE_URL + "post/",
    getAllTopic: function(){
        return [
            "HTML专题",
            "JavaScript专题"
        ]
    },
    getPosts: function(topic){
        switch (topic) {
            case 0:
                return ["文本标签","HTML基础元素"];
            case 1:
                return ["方法与属性","语句与数据类型"];

        }
    },
    getPostContent: function(topicName,postName){
        let url = this.path + topicName + "/" +postName + ".md";
        console.log("地址："+url)
        return new Promise((res,rej) => {
            axios.get(url).then(response => {
                console.log(response.data);
                res(response);
            },rej)
        })
    }
}
export default FileManager