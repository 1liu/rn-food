import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer bigkSuvGMiRe7EmyBVSxDh_cDCVzJ-kUQZMTdBzedF7MFHba8y1FExgVHMeHzMxWyJc3tXPmTRyIkh2OPZr5pBQsNQl2gCbb-BvhQLgfbDzeN3vBL9qMbswRi-BPX3Yx',

  }
})
