// * Valid slug example: http://localhost:3000/api/blogs?slug=how-to-learn-javascript
import * as fs from "fs";
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
    myFile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
    // console.log(myFile);
    allBlogs.push(JSON.parse(myFile))
    
  }
  res.status(200).json(allBlogs)



  // fs.readdir(`blogdata`, "utf-8",(err, data)=>{
    // if(err){
    //   res.status(500).json({error: "No such blog found"})
    // }
    // console.log(req.query.slug);
  
  // })
}
