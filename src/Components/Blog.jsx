import React from 'react';
import './Blog.css';
import ds from './ds.jpg';
import ReactPlayer from 'react-player';
import Navbar from './Navbar';
import Footer from './Footer';  // Ensure the path is correct
const Blog = () => {
  const articles = [
    {
      title: "Understanding Risk Adjustment",
      content: "Explore the basics of risk adjustment and its importance in insurance and healthcare.",
      image:"https://media.istockphoto.com/id/1172641679/photo/risk-management-and-assessment-for-business.jpg?s=1024x1024&w=is&k=20&c=SWFNBjSSaFl2EqVe8l_S8Dszkw-bt-1QmGXGukY___4=",
    },
    {
      title: "Advanced Techniques in Risk Adjustment",
      content: "Dive deeper into the methodologies and advanced strategies for effective risk adjustment.",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2wMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABJEAABAwIEAgcDCAYIBQUAAAABAgMEABEFBhIhMUEHEyJRYXGBFDKhIzNCUpGxwdEVFlRikpM1Q1V0orLw8SRygqPhJjRTc4P/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAgMBBAUGB//EADcRAAIBAwIEAggFAwUBAAAAAAABAgMEERIhBTFBURMUIjJSYXGBobE0NUJykRXR4QYzwfDxJP/aAAwDAQACEQMRAD8A3GgCgCgCgCgCgCgCgCgCgCgCgCgCgCgPLigPaAKAKAKAKAKAKAKAKAKAKAKAKAKA8JAFzsBzoDxDiV+4oK8jQHVAFAFAFAFAFAFAFAFAeXoBN99LDetQUbmyUp4qJ4AUAmPaSAVKZB+oASPK/wCNqAVaXrF7EEbEHkaAUoAoAoDkrSDYkCgDWk8FCgOqAKAKAKAKAKAKAKAj3i+7LUxq0pI+FAcPNuQwnqnLoUbEcyaAkUXKQVCxtvQHVAN3pbTJspW9+AoD1yWyjTdQIPMb2oBVKgsXSQR4UB1QBQBQFQ6Q85pylBjlpgPzZRIZQpVkgC2pR52FwNuZFZSyYbwROR80Zrx92JKmRMNRhri1JWoKUlwixsUi1rX23I51htJ4JxhJw1F2nvIbcjBZsS5q4bWA3PxFCJ0Y4W2VJmPhJSoakrHMg34cRaw8KAXY3KlcidqAUK0g2JFAAUDwI+2gPOsGoJJFzw340A1k2LnDlQHLXE+VAPk+6KANQHEgetAea0/WH20B1QBQBQBQBQDB5l1t9UhtWw3sefhQCdpE0b6UhJ4cKAkWxpSE3JsLXNAcvOhlBWq9h3UBFkJkPuOXDbQ7RUrawoCHk5jy20+WEY3FLqTYpCr/ABG1Z0sjqRP4TLjvR2wwtKwq5Ckm4PrWCRICgPaADQGWZ0RJm9KGHRUx25MP9Hlt9txII0qK1L499mxR8skoP00hyrG8LiYxhuGwHbSDJaaEVCCnqhcA6gR2RY8KrhF82bFWpFLSjSbCrDVE/Z2dWrqkau/SKAUtagGUj51VAQmbMVl4JgMjEILLLjjJTqDyrAJJsT4nht/tWUYfIz9Dmc82YknMWFRksGOCiOtKkJAG9wNfvHc3JFvUVLZcyG8t0TGRc0YjNxzEYWY5emSkJ0MLbS2EKT2VAHv4G3O5IrEl2Mxl3NCa94/Cokx8n3RQDSX748r0Bw3bWLmwoBww+25cJVcg2N6AXoAoAoAoAoAoBGTKjxW+skvtst/WcWEj40By8G5cf5NxJQrcLSbg0GTHMwYrPzXjasDwdZ9hSvT2DYOlJ3Wo/VG+35i00sLJXJ5eEXHCuj7AYEVKZTXt0i26lLUlAPgARt53NYc30MqC6ldxdL+QMxxJeHlX6Klk3YKiQm3vJ38DcHjyrPrEXmLyaww4h5lDrZuhYCknvB4VAtFKAYY1isXBsNfnTF2baTfSOKzySPE1lLJhvCMYRmV+Zm+NjM86Ql0IsncNtbjbvtqJ8as0bYRVq9JMvWCowtGeJCJEWM7OkMIfZlKbGtNrpKQe7sgj1rStKrrW6m+e6/g2Kq01Gi7iQyLjrUXTse1wrYIh7Qz/APKj+IUB0l1tzZC0qPgaAaSPnlUBTekfB8RxTB1uQpiksRmy49Ets+QQQfSxqUWiE08DLI+fMCg5aiwcSfVFeiN6SOpWsOC5soEA3PeON6OOTEZJIreGOYfm/pKdkPoKI6yXmkXKVLLYSEXI57auPK1Z5Iwt5GxtcT5VAtHqfdFANJXzifKgGj/0L3tfe1Adveznqgz72rfRxtQEmnhQHtAFAFAFAeE0Bl3Sohx/G4PWWVHZjLKWlbpU4VDe3fYEetU1ZtbI27Wll630DCcQXhPRjjDkdIaS0tTTGngkr0p2HLdXCrKW5VdJKWywOOiHBkIwp/Ev6x1zqgTyQLE/H7qtl2NWC6mgKjC/ZVZPPvqBYZ90zdU3hWFMi2r2hRHfbTvU4EKnIuuUwsZYwoO36z2RvVfjfSKi+ZJciWrBkxbpIx5zE8YVAZXeJDOm3JTn0lenD0PfVsVsUzllkJlrBVY3PUwXC20hBUtaU3t3ffWKk9KJ0aXiyxk0vDMHiYXOZnhbj8llnqUreWLBPltvWnTxTTUFhN5OjK2jL0m+RKsKK29ZFi4Ss+pvWwaTFim2ncbi/lQwPcKTs4ryAoDt/wCdVQCTsZmbGejSW0uMOpKFoVwUDyoCtYv0ZYFNhMMQGhAdaIHXoBUpaQCLKue0Tfid9qypMi4on2MKgYb1bUKGwwlpGhPVtgEA8R62rGTKSQ7a94+NDI8SRYUA1le+D4UBw172/CgHLDKEAlCRvxoBagCgCgCgE3XUtIUtxQSkczVdWrClBzm8JGYxcnhcyFl4ytRKYqQkDbWoXPpXnLrjkm9NBbd2dClZLnMhZWEMZgxGKZzrwW2T22yAVpseyduF978R604ZxCrWq+DWec/yTqx8COunsLZ2wJpvo+n4fhzRCGkpeCRupWlYWfM7V6eCUdkcyrJzeWIdEspD+VgygjU08rUL8jYg1KfMrg9i6LISlSlrAAFyTtYVEmYzmOY5njPEaDh3bhMq6ptY3BHFbnl+AHfVi2RU/SZs7DaGWUNNiyUJCQPACqy0UoDC+kHATlt4TVSevZmSF2SU2Uk7qNzwNWp7FMo7iGVM2YPgcZwupkqkvkFwBoEJA4Ab+JNQqR1l9Cr4Q/V0jRjIc1FxyOtNkoEbQW/XUb1DwizzUs7koOk/AkgDqJuwt80PzqWllGpAOlDArfMTb+LY/Os6WNSKnmHpBxR/GDIwGfLhxEoSEtECxVzJSbimkw2Xfo9z8vMb5w7FkNt4iEakONCyHwOO19leHA8u6jRlMv7HOokh6OFAQOZsdhYG0mROURrISlCd1K79vCspZIuWCq5qzthi8KkQ8NecffkM2S61dIbvvcnjepKO5iUlgruT86u4Al9qSw7MbeWFFReJUmwttfj9tSlHJCMsFpidITGJY+zDbguiM8EobcAu5rPenu/K/CouDSyT174Lm1fVv3d9QJj1v3BQHVAFAFAeE23JsBQFbx95bktDSSer0hQPKvLcclPxkn6uNvidKyS0t9SPUQhCjyAvauCt2bzHGGkomR999aQT99dHhj/+2H/ehrXP+yy1lKVJKVAEEEEHmK9sjkGdSMt4llTF1zMpvNONybgwJAuLX4A3GwJ24EeNSznZkHFp5RHYpHz/AJmvCmx0woitloaAbQR+8dSifurPooi9T2LbkzK8HLMZR6wPTHBZx3TYAfVT4ffUW8k4xwWhC0K901gkd0Bl3TTDW/l+PJbTdMWVqcsL6UqBTf7SKlEjIxgpPpUiAaaALaeNACdjQArjQFn6M2VPZ2w7QD2Ctaj4BJrDMo+hGedQLB4OFAZ/0tiIMIZW6yFSi8EsLHFA3KvSwt6ipwyVzwUjKuXVY29qXrLQVpQhCtJcIsTckGyRcXNibkAcdpt4IKOS5Yj0eREwlLbaSCkatUZbmtPotSgvy7J7jUNbJuCKJDekZYzE2tRSVxnO0R7q0KHLwKVfGp80QWzNjwTGIOMIccw94uobOlR0kWJ3HGqmsFyafInG/cFYMnVAFAFAJv8AzSvKsAqsqU3KkOBpaFhlRbVpUDpUDYg9xvXjeLVqlWu9SwlsjrWsYxhsxs/835kD41zafM2ZchRtSm3kOIXZSbECwtVlCv4M1UjzRCcFOOkjcw5oxZgsojvIaStG5Qgarg2O5r1VlfVK8W59GURtKY3yxj+JyswxWJDgk6yU9sboFtyLVv05yzhldehTjBtbGmK4Gtg5xHHifOgPHJ8aIn5Z0BQ+iNz9late7o0PXkWQpTnyRGycyqNxFYA/ecP4D8649bjb5U4/ybcLL2mRUnEJMpCkOuAoWClSbCygeIIrnVOJXVT9ePhsbEbekuhV5WT8DlLKjDLRPHqXCgfYKshxa6gsas/FEJWlKXQcwejzLq8NdkLZkrcQ9oF5C7WsOV/Gt7+q3Ls5VcrUnjl0wUeVpqqo9MFQ6QMts4OqNKgNFMRwdWtIUToWNwbnvH3eNbfCOITuoyhVfpL7f4Kru3VNpx5FPTwrtGkeHjQGi9CcMO45iMxRsI8ZLaL81LVvbyCP8VVzqQi1Fvdk4Rb3NmZ50JD0cKAxHOuX8WgzJc+couRXZbnUqLxWUpUpSki3IWsKui0USi0TPRriceO0W3lJSGdYcJ+glRSQs/u7EE8tr1GRKLNHlYjHix0rW4hwrHySEKBU6eQSOdV4LGzDMyvJk424iOpKghDbCVJ4LKUJTceoNvC1XLkUPdmsZQy81l+K4hp551T4Sp3rSOyoDgLAbb1XKWWXRjhFob9wVEkdUAUAUA1xOQImHyZJ4MtKct36Rf8ACgPlNuQ8mUqa26tuU4orW82opUSTc7jfjU5RUliSyV6muTLDAzvjcQBtx9Epv6shF/iLGubW4Ra1HlLD9xswu6seuS+ZJzDOzVIdYYhsMmOkKdKnibg7aht4Hbfzrn1OARztM2oXya9JbnXSQWMDw+LIecLjjjykIbSLXB7SiSeQ/Gtqy4bO3csyzkO+iv0k10fYC4hMbGpV0l9kLaZPvNhQ+l425eNdCFPS8srr3KqRwkXiQ+1HZU48sISOZrNWrClHVN4Rqxi5PCKpNxhx0lMUdWg/T+kfyrzl1xipUzGjsu/U6FK0jHeXMiySTc7muM93lm5g8rBkKAKBkvA/oN/+8j7hW9H8uqfuX2Rrv8RH4EVjeGN4vhL8FyyetR2VEX0q5H7a1LS5lbVlUXQtq0/Eg4swx5tbD7jD46t5tRQtBPAjY19BjJSSlHkzgNNPDOeBubismDWujWEI2W0vW7Ulwueg2H3V43jtZyu9K/Tg7FlDFLPcvETEXGDZwdYjz3FYtOMVaXo1fSj9SVa0jPeOzLBHfafb1tKChXqaNenXhrpvKOZOEoPEiuZ/C1ZdnJahmWVoA0D6O/venGtiPMrnyMgjxMUjR2cVix5SGgT1cptJ279xy+BqzYpw+Z2rF8VlpVHbdUev2WmMylKnvPQAVUwg2yTh5PzEyuDIbiFlS3Ro1EXaI4KUOQ2rDkiSizYIwWlKQ6sLc09tQFtR77VUXEg37goDqgCgCgGWNM+0YROZJ2cjuJ+1JFAfKaDdINuIqwqA0BYuj7F/0Jm2DKUqzLpMd7/kXt/mCT6VhmUbFmrJ0DM0iI/LekIXFIACFDQtNwSkg9/C9RTJtZLK4+mHELugqS2n3U1RcVlRpubWcE4R1SSKnOnPT3dbqrAHsoHBNeNurqd1LVPl0XY69KlGnHCG5NaxaeUAUAUAUDJeB/Qb/wDeR9wrej+XVP3L7I13+Ij8Bs68hhhx50kIbQVqIFzYC/CubGDnLTHqbMpaVkzrAsyYZmGbJgZihMCNMe6yM7YAtKItYqHMgDfv8K9/Rt3bUowi+Wxx41o1ZNTWzG+aej+ZhLbsrD3vaoLYKlJXs40OZPJQ8RY+HOro1M7MhUtnHdboleirF0yYcrDFOJUuOetbsrihRsQPIj4ivNf6gt9M41l12+aNuwqZjoZfK84dIVjPuRnAto2PMcjWxbXVS3nrpsqqUo1Fhk03JElKXkpUgkcD+Fe3s7hXFJVEsZOPVp+HNxFWLCwSAABbbatnJWQuGZIgQMfONNSHy+XXHQ2dOhJWCCNh+8ak5bYIKCTyTsr3x5VEmcNe96UA8QbIHCgOxQBQBQCEz/2r3ig/dQHyYj3E+VWFR0R2QaABvseB2oD6GyZjYxXKUCe+oF5LYaf7y4nsk+tr+tatzXhb03Ob2RfTg5vCHAmve0dcFeGk8Ld1eOlxKu7jxs/Lpjsdby0NGgQxCElxBlwk/J/1jfNs/lV1ehCrHzFDl1XVP+xCE3B6J/J9yLvXPNkKAKA8SoKvbkSD4Vlxa5mE8ntYMsl4H9Bv/wB5H3Ct6P5dU/cvsjXf4iPwERwFcvO5tYKHnbJcV2PIxTDg2wttBcfZt2HBxNu4/A/GvR8M4tNTVGtv0TOdc2qa1x2O8hZyTLaRguNrutSdEeQ5v1g+qq/PuPPnyv6KdNrdFNvXT9CRMO50wKBPkYbiDT8F9hzQr/hroV3KGi+xG+4rXr2iuKeme6LVcU4SxyYsc34EZDDbeItOdevQnTe6Ty1A8ByvXnrngdWmnKlul/JerynlLJZWGW0MmVN7LA2Cebh7hWpa2kVHx7jaC/lk6tVt+HDn9hi9iT7kwSUnQEbIQDsB3VOV/V8ZTjtjkumDEaEdGl8yx4dJblthxHMbjmDXq7W5hc01OJzKlN05YZKJ90VsFY0le+PKgEmlJ67RqTq03087X40GSv5hlSsVxdjL8HUlqwXNdSbaUne1/Kx8SR41JbbkJb7IuA4VEme0AUAlI3ZcHek0B8lIFkgeFWFZO5Wwn9OJxeIhGqQ3hy5LHeFNuN7eoUoetGEQaTcAihg0XoqxBakTsNWvsI0vtg957Jt8Ptrzv+oYPRCWdsnR4e/SaNBryp1RWO8uO4FoPgQeBHca2La5nbzUof8ApVUpxmsMQnREqbMqKOx9Nvmg/lW/XoQqw8xb8uq7FMJuL0T+Qw25VzzYPKAZOPezYo2hRs1LRYf/AGJ/Ep/yitpR8Si31j9n/ZlWcT+P3H1apayWgf0G/wD3kfcK3o/l1T9y+yNZ/iI/ASHAVymbhy42hxtTbiErQsaVJULhQ7jWYtxacdsGGk1uV7E8lYFNiqaagMQ3Cbh2MgIIPiBxHhXTocYuqUsyk5L3mrUtKU1ywM8DyjtKXmluNib3WBLD7gK1dWAAL3379q277jEpuLtpOPf4ldG15+Kssno2UctMp9rk4RDS0g3SOruVK8Kza3F04+NcVGods+t7vgRqU6alppxWfsOJ0xc17WuwQkWQjkkeFc+4uZV5anslyXY2aVNU1gbVrFo+wmaYUkFRPVL2WPx9K3+H3bt6qz6r5lFxSVSPvLq2QUJIOxFexTyso5BHY1KEGK/KWkKDTZUBe17cqyYbwitYPOTIza9JUkpQ9hza27q+hYHy94q3qT5EVuy2wIrbCVuBsB15WtxRG6j/AOKiSHdDIUAUAlJOlhw9ySaA+SgbpB7xVhUaD0IJC86SAoXScLeBH/6s1hkolElNlqS+39RxSbd1iRWTD5lq6MHNOZ1o5LhrHqFINcbj0c2me0l/ybdi8VvkavXjDtBQCjLqmVhaLHvB4EVsW9zO3nrh/HcrqU1NYYnOhJU2ZUQfJX+Ub5o/8Vv16EKkPHt/V6rsUQm4S0TI6uebBFZlYddwd52NcyopEhm3HUjtW9RcVu2E1Guoy9WWz+ZRXi3DK5rcd4dNaxGDHmMfNvoCgPwqi4ouhVlTlzRZCanFSRYYAIwR4EHeSOXgK2oxf9Pnt+pfZFLa8wvgIDbauQ+eDbR7QyFALNoQhv2iTcMjgOaz3V0rS0jp8ev6i+prVarzop8/sR0yU5Jc1qslI2QgcEio3NzOvLL5LkuyM06SghCtYtCgCgLDh09buBy29V32GlafEWNq9Vwe5dWlok94/Y5V3T0y1LqRTC3cQ6PEE6luezqA1G6iELNrk8TZIrs8pGnziOUQGILeErdUEKixyh1Xe0lN1fEAetOZnkOMnPyMTfxDF31OBl9YaYQo9kJRfcD1t5g0fYRedyzg3FRJHtAFANcTVow6Wv6rKz8DQHyenZIHhVhUaL0Gp/8AWMlXdhzg+1xr8qjIlHmUjHUdXj+LN8kT5CR6OqFZRh8yZ6Ol6M2RP323U/4b/hXM4ys2cn2wzZs/99GwV4c7gUAUArHfXHdC0W7iDwUO41sW1zUt56o/P3lVSmpxwzjEITa2jLhD5P8ArGhxbP5Vv1reFWHmLfl1Xb/BRTm4S8OoyLxCTBwdkOYs+UKWLoit7uLHee4edbllwedRKdbZFVe8jH0Y7mfYFmqbgSpuHYWhhthchTrBfbC1tJP0QeFh5d9el8CDlqa37nMdSSWE9h/+vGZ73GLL/wCXqGrf5Kt8OPYr1y7j2Fn7EkqAxKPGmo5nq+rX9qdvhWtVsbet68C2FxUjyZbsHxXDscbP6OdKJCRdUR7ZYHePreledveBOC1UN12OjQvtTxMkmWG0NKkTboZQbaeaz3CtC2soqLq3O0V07mxVrNvTT5kbOlrmPa19lI2QgcEioXNzK4ll7Lol0J06Spr3jatYsCgCgCgHuFSEx5iS6oBlYLblzYaT/oVvcNrOjcxfR7P5/wCSi5hrpsl40D2bCBCj2u0VhBHD3yR9oPxr2nXJx0tiOciLx/qGStTMUR0F+3vEncpH8Iv5is8jGMnGLynHcRhZZwYrjtoUgyFMq0lCAQSL8uz9pIHfT3mG+hdBwqKJntAFAR+YF9XgWJL+rEdP+E0B8qj3R5VYVGjdB5CMyz3D9DD1n/uI/Kqq0lGDk+hOmsvBTMzJKcy4vfiqc+o/9S1H8ajbTc6MZvqjNVYm0O8kL0Zrwwnm6pP2pI/GqOJrVZ1F7ids8Vom014E74UAUAUMDbGsa/VvCzKGkzZIKIzS+HitQ+qK9TwKyljx5dehyr6uvVRlMuS/NkrkzHVuvOG63FcTXplscsisRBaeakoFjwNYZJD9CgtIUngd6yYZ7QwdMuuMOodYWptxs6kKQbFJ8KGU8GnYPjZzPhilPKtiMNPyyBsHEfXA5Hv/ANq4PGbKU4eJDp0OhZV0npfU79QfKvKnWPKAKAKAKACAQQaym1ug1ksOCpWzHSyt0uJLaVocPEjhv4jSB6V7yjUVSlGa6nCnHTJoYYdiDOGRHZc+QhoyVlaEk/Nt7JBI5khIP+iaue/Igmc5envz8UWcHhJjxOs1SpUlBU494cRYn1437rmsGE8sug4VEme0AUBE5q1fq3iuhKlKMRwBKRcnsmgPmNMCXpH/AAkvhzjr/Kpa49yvDL50QtPMYtizjrDzY9g0grbUkXK099aPEqijazafQvto5qJMrGbYsj9acUtGfKS/dJDSiCCAdtvGpcOnF2dPfoYuItVZfE5y1HlM5gw5wxZOlMhBKuoXYC/M2qd64ytp/AxQyqsX7zbOFfPjvhQyFAKR2i9IbbH0lAVdb0nWrRprqyupPRByMzzrif6TzHJcSq7DHyDKR9FCT+JufXwr6LSgoQUYnnJy1SyyDqwgITG+tjLHMbjzozKG2Fv6kFk+8N0+VYRlkhWSIUBJZbxU4LjUabf5NKtLw5Fs7K+G/pWJRUlgypaXk0jEI4izXmk30hV0+R4V4G8o+DXlDp0+B6KjPXTTG9axYFAFAFAFALO4mpqKGdSWG9HVuPuHZCblRAHFSiCBYcrnuNey4RLVaR92Uca72qsl8AMHE4qnm4qlNhRR1khAu7YDfy5eFrcq6D2KFhljjtttMpQ0hKEJ4JSLAelYJCtAFAFANcTQXsPlMpBKlsrSAOZIqM1mLRlczE1ZVx9OxweTfwCT+NcTylRfpN3xY9ztnL+ZYzodjYZNacHBSAAfLjuKeVqYa07Mx4sc5yKTcFzLPe6+XhMku6Qm6WwLgc+NQjZSgtMY7GXWi92xv+rGO/2PLP8A0D86l5Wp7JjxY9ydwZGaIbjbL+Fy3Y1wCHEbpHgb1rV+GymsqO5bC4itmy2ezv8A7O9/LNcv+nXfsP6Gx5il7R57O/8As738s0/p137D+g8xS9oWhtutPlamHhpQoj5NW5ttyrocLsa9O6jOpHCWTXuq8JU2osyYZZzCoal4PMC1bq+T5869jqRxtLPf1Yx/+yJn8s01IaWLwMp4y/NYak4dLZYWsBx0tHsp5n7KakZ0M0RnK+CsxRGawdAbtbeOdX8Vr3qrJbjbBQMWyjikfEnmoOHzH4oV8msNngfy4VYpLqVODzsM/wBWMf8A7ImfyzWdSMaWeHK+PEEHB5h8OrNNS7jSzSnY0x6NBW5Ff672RoPDqzssJFxw768vxazq1K6lTjlYOtaVYxp4k8CXsMv9lf8A5ZrmeQuvYf0NrzFLuHsMz9lf/lmnkLr2H9B5il7R77BM/ZX/AOWaeQuvYf0HmKXtB7BM/ZXv4DTyF17D+hh16XcP0fN/ZXv4aeQuvYf0Hj0u48iZfjSUh3EYji3UmyErvpA25cK9HwmFWlb6JrDyc66cZ1MrsWBhoNhKG2tDaRZKUpsAK6RQPW/doDugCgCgCgOe+gPawAAoAtTICsgKwAoAIrIPL0AXoAvQHooAJoDzUaAL0B7QBagC1AFqALUyDw0B6KGEBoZAUB7QBQH/2Q==",
    }
  ];

  return (
    <>
      <Navbar />  {/* Navbar at the top of the page */}
      <div className="blog-container">
        <header className="blog-header">
          <h1>Risk Adjustment Guide</h1>
        </header>

        <section className="featured-video">
          <h2>Featured Video</h2>
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=Jf0nMO_2OAE'
            className="react-player"
            playing
            width="100%"
            height="100%"
          />
        </section>

        <section className="articles">
          {articles.map(article => (
            <article key={article.title} className="article-card">
              <img src={article.image} alt={article.title} />
              <div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </article>
          ))}
        </section>

        <aside className="interactive-chart">
          <h2>Interactive Risk Adjustment Chart</h2>
          <div className="chart-placeholder">
            <img src={ds} alt="Risk Adjustment Chart" />
          </div>
        </aside>

        <footer className="newsletter">
          <h2>Stay Updated</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </footer>
      </div>
      <Footer />  {/* Footer at the bottom of the page */}
    </>
  );
};

export default Blog;
