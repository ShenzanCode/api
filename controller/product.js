const product = require("../models/product");
const Product= require("../models/product")

const getallProucts=async(req,res)=>{

    const {company,name,featured,sort,select}=req.query
    const queryObject={};
    if(company) queryObject.company=company;
    if(featured) queryObject.featured=featured;
    if(name) queryObject.name={$regex:name,$options:"i"}
    let apiData=product.find(queryObject)
    if(sort) {
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix)
    }
    if(select) {
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix)
    }
    console.log(queryObject.company)

    const myData=await apiData
        res.status(200).json({
            success:true,
            myData
        })
}

const getallProuctstesting=async(req,res)=>{
    console.log('helo am shenzan ali cheena ')
    const mydatata= await Product.find({company:"Apple"}).exec()
    console.log(req.query.products)
    console.log(req.query)
    res.status(200).json({mydatata})
}

module.exports={getallProucts,getallProuctstesting}