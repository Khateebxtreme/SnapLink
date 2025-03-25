import React from 'react'
import ShortItem from './ShortItem'
import { useNavigate } from 'react-router-dom'

const ShortUrlList = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div>
      {data ? (
        <div className="my-6 space-y-4">
          {data.map((item) => (
            <ShortItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        navigate("/error")
      )}
    </div>
  );
}

export default ShortUrlList