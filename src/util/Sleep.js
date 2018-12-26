
// tslint:disable:no-console
let sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// const sleep = async (ms) => {
//   console.log("beforesleep...")
//   await sleepTmp(ms);
//   console.log("aftersleep...")
// }

export default sleep;