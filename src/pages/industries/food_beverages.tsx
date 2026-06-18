import { IndustryPage } from "../IndustryPage";
import { foodBeveragesData } from "../data/foodBeveragesData";
import { SEO } from "../../components/SEO";
import { foodBeveragesMeta } from "../data/seoMeta";

export default function FoodBevPage() {
  return (
    <>
    <SEO
        title={foodBeveragesMeta.title}
        description={foodBeveragesMeta.description}
        keywords={foodBeveragesMeta.keywords}
        canonical={foodBeveragesMeta.canonical}
        ogImage={foodBeveragesMeta.ogImage}
      />
   <IndustryPage data={foodBeveragesData} />
   </>
  );
}