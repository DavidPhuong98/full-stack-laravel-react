//import * as imgs from "../assets/img"
const images = require.context('../assets/img', true);

export const imageList = images.keys().reduce( (acc, cur) => {
                                    let obj = {}

                                    let namePath = cur.replace("./", "").replace(/-/g, "_").split("/")
                                        namePath = (namePath.length > 1) ? namePath[1] : namePath[0]
                                        namePath = namePath.split(".")[0] 

                                        obj[String( namePath )] = images(cur)
                                    return { ...acc, ...obj }
                                }, {} )
                             


