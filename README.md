# Spacestragram by Lindsay Ward 👋🏳️‍🌈🇨🇦
## For consideration of the 2022 Front-End Developer Summer Internships at Shopify 🚀

This page is an Instagram app clone that features photos from NASA's Astronomy Picture of the Day (APOD) API. Since Instagram uses ReactJS, I thought it would be easiest to setup this app with it as well.
Users can "like" and "unlike" images and see data for each image. There's also a button after you've scrolled past the initial photos that load which will load new photos and scroll the user back to the top of the page. I added an animated loading icon component to prevent blank space on the initial load of the page.

This app was initially setup in VS Code using create-react-app. From there, I setup several components to keep the code from getting too hard to read within one component:
- the App
- the Photo (displayed in a Bootstrap Card layout)
- the Like/Unlike button & heart icon
- the Footer

I also used Bootstrap to make the page responsive (and quickly too!). I also used the Bootstrap icons for GitHub and LinkedIn within the footer.

Loading icon was found on npmjs here:
https://www.npmjs.com/package/react-loading-icons

I hosted the page on Netlify and you can see it here:
https://eloquent-montalcini-e2a2a0.netlify.app/

I found I was having issues with some data from the NASA API since some results are not images, but videos. Putting videos in my <img> elements obviously wouldn't work. I tried using the HTML5 <video> tag and some conditional statements to show the embedded YouTube or Vimeo video, but ended up with white space. I've commented out that code for now due to time constraints. I suspected it would have to do with Netlify hosting or a browser security feature for embedded photos. Otherwise, I'd take a look at using a different element to see if that would work. If you have ideas or a solution, let me know!

Thank you for looking at my project! It was fun to put it all together by myself, and I learned a lot by doing it.
