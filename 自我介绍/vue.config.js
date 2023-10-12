// vue.config.js
module.exports = {
		transpileDependencies:['@dcloudio/uni-ui'],
		devServer:{
				port:'8081',
				disableHostCheck:true,
				proxy:{
					'/dpc':{
						target:'http://localhost:3000',
						changeOrigin:true,
						pathRewrite:{
							'^/dpc': ''
						}
					}
				}
			}
}