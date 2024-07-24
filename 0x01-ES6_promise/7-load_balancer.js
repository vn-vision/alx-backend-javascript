// used to wait until any one of the promises is resolved or rejected first
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
