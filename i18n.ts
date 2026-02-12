import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        cart: "Cart"
      },
      hero: {
        title: "Premium Vape Experience in Egypt",
        subtitle: "Discover the finest vaping products with authentic flavors",
        cta: "Shop Now"
      },
      products: {
        title: "Our Products",
        categories: {
          devices: "Devices",
          liquids: "E-Liquids",
          accessories: "Accessories",
          pods: "Pods & Coils"
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "عنّا",
        contact: "اتصل بنا",
        cart: "العربة"
      },
      hero: {
        title: "تجربة فيب مميزة في مصر",
        subtitle: "اكتشف أفضل منتجات الفيب بنكهات أصلية",
        cta: "تسوق الآن"
      },
      products: {
        title: "منتجاتنا",
        categories: {
          devices: "الأجهزة",
          liquids: "السوائل الإلكترونية",
          accessories: "ملحقات",
          pods: "البود والملفات"
        }
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n