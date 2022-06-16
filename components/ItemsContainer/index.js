import FooterItem from "@components/FooterItem"
import FooterItem2 from "@components/FooterItem2"


const ItemContainer = () => {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-1 laptop:grid-cols-2 gap-20 mobile:px-8 px-5 py-16">
        <FooterItem/>
        <FooterItem2/>
    </div>
    
  )
}

export default ItemContainer