//your JS code here. If required.
function secondHighest(arr){

let max=-1,secMax=-1;
		for(leti=0;i<n;i++){
			if(arr[i]>=max){
				if(arr[i]>max){
				secMax=max;
				}
				max=arr[i];
			}
			else if(arr[i]>secMax){
				secMax=arr[i];
			}
		}
		console.log(secMax);
}