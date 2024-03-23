import { iceland } from "@/components/ui/fonts";
import Link from "next/link";



const Organizer = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center min-w-[200px]  max-[640px]:min-w-[120px]">
        <div className="rounded-full  w-32 h-32 p-3 bg-[#EBF5FF1A]">
          <img
            src={data.img != "" ? data.img:"/profile.png"}
            className="rounded-full hover:scale-110 transition-scale duration-500 bg-white "
          />
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-mono font-bold text-xl max-[640px]:text-[18px]">
              {data.name}
            </p>
            <p className=" text-slate-300 font-semibold">{data.position}</p>
          </div>
          <div className="flex flex-row gap-2 justify-center ">
            {data.github != "" ? (
              <Link href={data.github}>
                <img
                  src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
                  className=" bg-white w-7 h-7 object-fill rounded-full "
                />
              </Link>
            ) : (
              <></>
            )}

            {data.linkedIn != "" ? (
              <Link href={data.linkedIn}>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  className=" w-7 h-7 object-fill rounded-full "
                />
              </Link>
            ) : (
              <></>
            )}
            {/* {data.instagram != "" ? (
              <Link href={"https://www.instagram.com/" + data.instagram}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
                  className=" w-7 h-7 object-fill rounded-full "
                />
              </Link>
            ) : (
              <></>
            )} */}
            {/* https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png */}
          </div>
        </div>
      </div>
    </>
  );
};

const members = [
  {
    name: "Angelina Abuhilal",
    linkedIn: "https://www.linkedin.com/in/angelina-abuhilal",
    github: "",
    position: "HackUTA Exec",
    img: "https://media.licdn.com/dms/image/D4D03AQGT80FQ_HyW-Q/profile-displayphoto-shrink_800_800/0/1692804546541?e=1716422400&v=beta&t=UZsEHCTq7vRZqhUPAJqtPJDf33ZWFnh4Ogj1I1QANiw",
    instagram: "angelina_abu_hilal",
  },
  {
    name: "Joanna Jose",
    linkedIn: "https://www.linkedin.com/in/joannakj1007/",
    github: "",
    position: "HackUTA Exec",
    img: "https://media.licdn.com/dms/image/D5603AQFh00SG_9Q6RQ/profile-displayphoto-shrink_800_800/0/1691768614203?e=1716422400&v=beta&t=r0XNogMw-XILxKC9Znas28nsVYkMIweyLObHSGBGLUg",
    instagram: "",
  },
  {
    name: "Patrick Chang",
    linkedIn: "https://www.linkedin.com/in/pchang3",
    github: "",
    position: "HackUTA PM (Advisor)",
    img: "https://media.licdn.com/dms/image/C4E03AQGtgf-YBhYcKA/profile-displayphoto-shrink_800_800/0/1614640160598?e=1716422400&v=beta&t=CXndU__I81DgdIZc3MAL7zYpSLIbyPi6SK96-ymYBvA",
    instagram: "",
  },
  {
    name: "Saja Hussein",
    linkedIn: "",
    github: "https://github.com/Iremiaa",
    position: "HackUTA Advisor",
    img: "https://www.hackuta.org/images/Organizers/saja.png",
    instagram: "",
  },
  {
    name: "Ryan Lahlou",
    linkedIn: "https://www.linkedin.com/in/lryanle/",
    github: "https://github.com/lryanle",
    position: "HackUTA Advisor",
    img: "https://media.licdn.com/dms/image/D5603AQE_BMzuPhlDeA/profile-displayphoto-shrink_800_800/0/1681351019578?e=1716422400&v=beta&t=Aq4KeNhgUVY7Iu22l0FzSsHaoWB5aucyyLjLGf_SHDI",
    instagram: "lryanle",
  },
  {
    name: "Trevor Reigh",
    linkedIn: "https://www.linkedin.com/in/trevor-reigh/",
    github: "https://github.com/tjreigh",
    position: "HackUTA Advisor",
    img: "https://media.licdn.com/dms/image/D5603AQGG4BwZLegLqQ/profile-displayphoto-shrink_800_800/0/1681619937086?e=1716422400&v=beta&t=VgXHdhZQSEi7AqNQRWxz86gP62wS_haulaabGUIqO1E",
    instagram: "",
  },
  {
    name: "Isabella Hague",
    linkedIn: "",
    github: "",
    position: "Corporate",
    img: "",
    instagram: "",
  },
  {
    name: "Tanmayee Siddineni",
    linkedIn: "",
    github: "",
    position: "Corporate",
    img: "",
    instagram: "tanmayee.siddineni",
  },
  {
    name: "Devrat Patel",
    linkedIn: "https://www.linkedin.com/in/devratpatel/",
    github: "",
    position: "Corporate",
    img: "https://media.licdn.com/dms/image/D5603AQEruJcVpMQRow/profile-displayphoto-shrink_800_800/0/1698660167754?e=1716422400&v=beta&t=H2Wqd3_i3aSnoRCWQC7F4WeL2rf4R8BtaGmyLzXyN_U",
    instagram: "devratpatel",
  },
  {
    name: "Yash Rao",
    linkedIn: "https://www.linkedin.com/in/yash-rao-9082bb246",
    github: "https://github.com/tecno5",
    position: "Corporate",
    img: "https://media.licdn.com/dms/image/D5603AQFz45vRnau6Cw/profile-displayphoto-shrink_800_800/0/1698994901045?e=1716422400&v=beta&t=MgkU3NnkMvpuWpyH62WzbNwQH3bESv8-ImVdt3R0GKs",
    instagram: "yash.r.rao",
  },
  {
    name: "Raghu Sangala",
    linkedIn: "https://www.linkedin.com/in/raghu-vamsi-s-01081420b",
    github: "https://github.com/raghuvs931",
    position: "Corporate",
    img: "",
    instagram: "rag_hu9949",
  },
  {
    name: "Thanh Cao",
    linkedIn: "https://www.linkedin.com/in/thanh-th-cao/",
    github: "https://github.com/thanhthesheep",
    position: "Corporate",
    img: "https://www.hackuta.org/images/Organizers/thanh.png",
    instagram: "bonelessporkloin",
  },
  {
    name: "Oscar Ventura",
    linkedIn: "https://www.linkedin.com/in/oscar-ventura-92869b200/",
    github: "",
    position: "Logistics",
    img: "",
    instagram: "_flaco.guy_",
  },
  {
    name: "Samantha Salgado",
    linkedIn: "https://www.linkedin.com/in/samantha-salgado-833972225",
    github: "https://github.com/samxsalgado",
    position: "Logistics",
    img: "https://media.licdn.com/dms/image/C5603AQGx7O7XDi2rwg/profile-displayphoto-shrink_800_800/0/1649992164762?e=1716422400&v=beta&t=Zvy68AvdywaDheoyvoykhquCD1pHXpD-7FRfdwMNzeQ",
    instagram: "samanthaelenasalg",
  },
  {
    name: "Roshini Armstrong",
    linkedIn: "",
    github: "",
    position: "Logistics",
    img: "",
    instagram: "",
  },
  {
    name: "Asmin Pothula",
    linkedIn: "https://www.linkedin.com/in/asminpothula/",
    github: "https://github.com/AsminPothula",
    position: "Logistics",
    img: "https://media.licdn.com/dms/image/D5603AQFq0lme7UZafw/profile-displayphoto-shrink_800_800/0/1681174671825?e=1716422400&v=beta&t=oqO3JkIxnFCXQwBMi6g3WIuUlhLgbVI3oHZugd_f1V4",
    instagram: "asmin.pothula",
  },
  {
    name: "Fawaz Asif",
    linkedIn: "https://www.linkedin.com/in/fawaz-asif/",
    github: "https://github.com/fawaz-asif98",
    position: "Logistics",
    img: "https://media.licdn.com/dms/image/D5603AQElm5fCrZ8O-g/profile-displayphoto-shrink_800_800/0/1695363517636?e=1716422400&v=beta&t=iZP-DSzogQ2Jd47K_wz_5YY1i1Hr6QdjgfPncLzVn3M",
    instagram: "f_awazz97",
  },
  {
    name: "Ahmed Ibrahim",
    linkedIn: "https://www.linkedin.com/in/ahmed-ibrahim-se/",
    github: "",
    position: "Logistics",
    img: "https://media.licdn.com/dms/image/D5603AQGKTVr9Fv4jDQ/profile-displayphoto-shrink_800_800/0/1707541177252?e=1716422400&v=beta&t=efF_YW_qiL8RXzaVoLrt76cIlrHKpXFva8hA8k2UdW4",
    instagram: "",
  },
  {
    name: "Marwan Abu Lebdeh",
    linkedIn: "https://www.linkedin.com/in/marwanabulebdeh-0412a7252",
    github: "https://github.com/marwanthestudent",
    position: "Logistics",
    img: "https://media.licdn.com/dms/image/D5603AQFqbqL4kIIVGw/profile-displayphoto-shrink_800_800/0/1709012756693?e=1716422400&v=beta&t=VSXvbQKBoWOxK2ztde_izAzhUYEXNzRLNjn69dmmjVQ",
    instagram: "marwanabulebdeh",
  },
  {
    name: "Khushi Gauli",
    linkedIn: "",
    github: "",
    position: "Experience",
    img: "",
    instagram: "",
  },
  {
    name: "Taher Husain",
    linkedIn: "https://www.linkedin.com/in/taher-husain-b4077028a",
    github: "",
    position: "Experience",
    img: "",
    instagram: "",
  },
  {
    name: "Phani Teja U",
    linkedIn: "https://www.linkedin.com/in/phanitejau/",
    github: "https://www.github.com/phaniteja25",
    position: "Experience",
    img: "https://media.licdn.com/dms/image/D5603AQEfW-ulcUZ_oQ/profile-displayphoto-shrink_800_800/0/1701970416873?e=1716422400&v=beta&t=md68pMHJRIiJxU56ZltM0mRqIkoqcseKPax6XdB69kE",
    instagram: "phani_teja25",
  },
  {
    name: "Basmlh Elsayed",
    linkedIn: "",
    github: "",
    position: "Experience",
    img: "https://www.hackuta.org/images/Organizers/buza.png",
    instagram: "",
  },
  {
    name: "Javier Cardoso",
    linkedIn: "",
    github: "",
    position: "Experience",
    img: "https://media.licdn.com/dms/image/D5603AQHVSGtaf1v08Q/profile-displayphoto-shrink_800_800/0/1668324527271?e=1716422400&v=beta&t=NSpV5mfpB_kKEC9IC0Swv8S92-vr0s0CkVAwBDfMSxY",
    instagram: "",
  },
  {
    name: "Samridh Singh",
    linkedIn: "",
    github: "",
    position: "Experience",
    img: "https://media.licdn.com/dms/image/D4D03AQHVNjxRGDagKA/profile-displayphoto-shrink_800_800/0/1688374321322?e=1716422400&v=beta&t=lbG56GFNxUCFpKRHbrK0SWvv6KN9Nm6OO-q-_3pc9ls",
    instagram: "its_samridhsingh",
  },
  {
    name: "Hussain Alkatheri",
    linkedIn: "https://www.linkedin.com/in/hussain-alkatheri/",
    github: "https://github.com/stardestro",
    position: "Experience",
    img: "https://www.hackuta.org/images/Organizers/hussain.png",
    instagram: "",
  },
  {
    name: "ErickSandro Dinklang",
    linkedIn: "https://www.linkedin.com/in/dinklang/",
    github: "https://github.com/dinklang",
    position: "Tech",
    img: "https://avatars.githubusercontent.com/u/83144598?v=4",
    instagram: "sandro_v1",
  },
  {
    name: "Irian Durian",
    linkedIn: "https://www.linkedin.com/in/iriandurian/",
    github: "https://github.com/saucypilot",
    position: "Tech",
    img: "https://media.licdn.com/dms/image/D5603AQHvTZjoZ7_b4g/profile-displayphoto-shrink_800_800/0/1694213142124?e=1716422400&v=beta&t=KhFKA7Q9mUAWEKXsajV2hwCnTj_K9C6EeklmYvYpjSw",
    instagram: "iriandurian",
  },
  {
    name: "Vashishth Gajjar",
    linkedIn: "https://www.linkedin.com/in/vashishthgajjar2001",
    github: "https://www.github.com/grand-27-master",
    position: "Tech",
    img: "https://media.licdn.com/dms/image/D4D03AQGNAO9F2M1kGg/profile-displayphoto-shrink_800_800/0/1692643643699?e=1716422400&v=beta&t=14RRHQdTiFafUHMeb1b3Lz-VhKIbqIT04PkYf4OSjdU",
    instagram: "vaxhixhth",
  },
  {
    name: "Inshaad Merchant",
    linkedIn: "https://www.linkedin.com/in/inshaad-merchant-3bb154232/",
    github: "https://github.com/InshaadMerchant",
    position: "Tech",
    img: "https://avatars.githubusercontent.com/u/114313560?v=4",
    instagram: "inshaadmerchant",
  },
  {
    name: "Nishchit Malasana",
    linkedIn: "https://www.linkedin.com/in/nishchit/",
    github: "https://github.com/Nishchit-Dev",
    position: "Tech",
    img: "https://media.licdn.com/dms/image/D5603AQHKdKu_xXlKcg/profile-displayphoto-shrink_800_800/0/1706937269997?e=1716422400&v=beta&t=QRdPOC4WIwOC49aqB6uBPHC3X75xTZsku2Uz-52GWJ0",
    instagram: "nishchitmalasana",
  },
  {
    name: "Shrey Navadia",
    linkedIn: "https://www.linkedin.com/in/shreynavadia/",
    github: "https://github.com/shreynavadia",
    position: "Tech",
    img: "",
    instagram: "Shreynavadia",
  },
  {
    name: "Nhi Tran",
    linkedIn: "https://www.linkedin.com/in/nhi-tran-thi/",
    github: "https://github.com/nhitran26197",
    position: "Tech",
    img: "https://media.licdn.com/dms/image/C4D03AQGNgIxJZ4TQFw/profile-displayphoto-shrink_800_800/0/1658151605201?e=1716422400&v=beta&t=a91S-yHNfoKwA-oUM6KY6_qzFjuovcB0vvvWW-_I1Kg",
    instagram: "haiddza",
  },
  {
    name: "Geetha Sigatapu",
    linkedIn: "https://www.linkedin.com/in/sigatapu-geetha-madhuri",
    github: "https://github.com/GeethaUTA",
    position: "Creative",
    img: "",
    instagram: "",
  },
  {
    name: "Armaan Nalli",
    linkedIn: "",
    github: "",
    position: "Creative",
    img: "",
    instagram: "",
  },
  {
    name: "David Akinmade",
    linkedIn: "",
    github: "",
    position: "Creative",
    img: "",
    instagram: "",
  },
  {
    name: "Dominic Lamanna",
    linkedIn: "",
    github: "",
    position: "Creative",
    img: "",
    instagram: "",
  },
  {
    name: "Aviral Saxena",
    linkedIn: "https://www.linkedin.com/in/AviralSaxena",
    github: "",
    position: "Marketting",
    img: "https://www.hackuta.org/images/Organizers/aviral.png",
    instagram: "_avi.c",
  },
  {
    name: "Bobby Flennoy",
    linkedIn: "https://www.linkedin.com/in/bobby-flennoy",
    github: "",
    position: "Marketting",
    img: "https://media.licdn.com/dms/image/D5603AQFssQT7R5xHKA/profile-displayphoto-shrink_800_800/0/1675617246060?e=1716422400&v=beta&t=SJWwBS6DKE4Tmyk-ZYKmUQF6kEvMYw4GvlTCw4lYfnY",
    instagram: "flennoyba",
  },
  {
    name: "Agnes",
    linkedIn: "",
    github: "",
    position: "Creative",
    img: "",
    instagram: "milokotone",
  },
  {
    name: "Raul Salas",
    linkedIn: "https://www.linkedin.com/in/raul-salas",
    github: "https://github.com/DavixVulcan",
    position: "Creative",
    img: "https://media.licdn.com/dms/image/D4D03AQHViML4PGWyrg/profile-displayphoto-shrink_800_800/0/1685479575143?e=1716422400&v=beta&t=xqAp7tstWtWbQx0vPEv2cMupqGNHnyk5l_2kfjTVizg",
    instagram: "",
  },
];

export default function OrganizingTeam() {
  return (
    <>
      <div className=" h-max mt-20  max-[640px]:justify-center max-[640px]:items-center  max-[640px]:flex-col flex flex-row w-full items-start justify-start pt-0 px-5 pb-[248px] box-border gap-[0px_157px] max-w-full text-left text-57xl text-white font-iceland lg:flex-wrap lg:gap-[0px_157px] mq750:gap-[0px_157px] mq1050:pb-[161px] mq1050:box-border mq450:gap-[0px_157px] mq450:pb-[105px] mq450:box-border ">
        <div
          className={`${iceland.className} flex flex-row flex-1 items-center md:text-6xl text-4xl justify-center py-0 px-5`}
        >
          Organizing Team
        </div>

        <div className="mt-20 flex flex-row flex-wrap gap-5 justify-center items-center">
          {members.map((data, i) => {
            return <Organizer data={data} />;
          })}
        </div>
      </div>
    </>
  );
}
