import { NextResponse, type NextRequest } from 'next/server'
import { redis } from "./lib/redis.js";




 
export  async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/go')) {

  

  const getValidUrl = (link: string): string=> {
    if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
      // Link has http or https -> return as is
      return link;
    } else {
      // Link doesn't have http or https -> add it
      return `https://${link}`;
    }
  };


      // get the short url
  
      const pathname = request.nextUrl.pathname;
      let parts = pathname.split("/");
      let shotUrl= parts[parts.length - 1]
  
      // load long url from redis
      const longUrl = await redis.hget("links",  shotUrl) as string;
      console.log(longUrl)

      if(longUrl){
           // short url found
    const validUrl = getValidUrl(longUrl);
    // redirect to long url
    return NextResponse.redirect(validUrl);

      } else {
        return NextResponse.redirect(request.nextUrl.origin )
      }



  
  
  
  }



}