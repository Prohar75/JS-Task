function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
async function logHi()
{
  await console.log("Hi");
}
delay(2000).then(logHi);
  

function makeDroids() {
  const droids = [];
  for (let i = 0; i < 10; i++) {
    let droid = () => {
      console.log("D" + i);
    };
    droids.push(droid);
  }
  return droids;
}

for (let d of makeDroids()) {
  d();
}



function delayCheck(duration) {
  const startTime = performance.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      const endTime = performance.now();
      const delay = endTime - startTime;
      resolve(delay);
    }, duration);
  });
}
async function logHi()
{
  await console.log("Hi");
}

const minDelay = 2000;
const maxDelay = 4000;
const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

delayCheck(randomDelay).then((duration) => {
  if(duration > 2000){
    console.error(`error: duration was ${duration}`);
  }
  else{
    console.log(`duration was: ${duration}`);
  }
});







class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
  }

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
     throw new HttpError(response);
  }
}
async function demoGithubUser() {
  let name;
  let user;
  while(!user){
    name = prompt("Login?", "iliakan");
    try{
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
    }catch(err){
      if(err instanceof HttpError && err.response.status == 404){
        alert("We can't find such user.");
      }else{
        throw err;
      }
    }
  }
  return user;
}
demoGithubUser();