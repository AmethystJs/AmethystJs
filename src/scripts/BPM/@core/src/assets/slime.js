import MersenneTwister from './mt.js'
export const slime=(x,z)=>{let chunkX=Math.floor(x/16)>>>0,chunkZ=Math.floor(z/16)>>>0,seed=((a,b)=>{let a00=a&0xffff,a16=a>>>16,b00=b&0xffff,b16=b>>>16,c00=a00*b00,c16=c00>>>16;c16+=a16*b00;c16&=0xffff;c16+=a00*b16;let lo=c00&0xffff,hi=c16&0xffff;return((hi<<16)|lo)>>>0;})(chunkX, 0x1f1f1f1f)^chunkZ,mt=new MersenneTwister(seed),n= mt.nextInt(),isSlime=(n%10==0);return(isSlime);}

