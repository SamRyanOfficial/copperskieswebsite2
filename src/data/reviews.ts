export interface Review {
  id: number;
  text: string;
  author: string;
  event: string;
  venue: string;
  date: string;
}

export const reviews: Review[] = [
  // Ordered from most recent to least recent (DD/MM/YYYY)
  {
    id: 20,
    text: "We used Sam and James for our wedding and I literally cannot express how wonderful they were. They were so kind and personable but they were also SO TALENTED. They took requests from our party and by the end of the night felt like friends we had invited to our wedding. Their range was unmatched and covered so many genres. We cannot imagine what our day would have been like without them. So so so incredible.",
    author: "Angela and Tina",
    event: "Wedding",
    venue: "Hobbiton Movie Set Tours",
    date: "12/10/2025"
  },
  {
    id: 21,
    text: "We had Sam & James play at our wedding and could not be happier with our choice! Better Band were seemless to deal with. Sam & James were professional and fantastic performers. The energy they brought to the dance floor and flexibilty to read the room and go to where the crowd were, was everything we hoped for. Thanks so much to Sam & James and the Better Band team for helping boost our wedding to the spectacular day and evening that it was.",
    author: "Laura & Simon Wegner",
    event: "Wedding",
    venue: "The Black Barn, Lake Tarawera",
    date: "12/4/2025"
  },
  {
    id: 22,
    text: "Sam and James are bloody awesome, they played at our end of season prizegiving and had everyone up dancing from start to finish. We re-booked them again before they'd even left the venue. Great banter, know how to read a room, and keep everyone up and dancing. Wouldn't get anyone else!",
    author: "Tori Mouat",
    event: "Corporate Event",
    venue: "Classic Flyers",
    date: "7/6/2025"
  },
  {
    id: 23,
    text: "We hired Copper Skies for our wedding back in March. They had played at two others we'd been to and made such a great impression that I'd decided I wanted them for my own wedding before I was even engaged. They're super easy to communicate and work with in the lead-up, which is a lifesaver when you're trying to plan a million other things. The atmosphere they create is unmatched. They're true entertainers and play such a great range of music that every single song had people singing along. Most of our guests didn't leave the dance floor the whole night! Everyone I've spoken to since has commented on how they made the evening feel like a real celebration. Honestly, we can't imagine our wedding without them and would recommend them to everyone.",
    author: "Claudia and Rhys Bryant",
    event: "Wedding",
    venue: "Private Residence",
    date: "1/3/2025"
  },
  {
    id: 24,
    text: "We had this band play at our wedding in February and they were absolutely fantastic! Their communication leading up to the day was excellent - friendly, clear, and easy to work with. On the night, they arrived early and set up seamlessly, letting us relax and enjoy the start of our celebration without any stress. The music was exactly what we wanted, and everyone had such a great time dancing and singing along. We even requested a particular song that wasn't on their playlist, and it was no problem for them - they learnt it and played it perfectly! We can't recommend this band highly enough!",
    author: "Kathryn & Cole Jackson",
    event: "Wedding",
    venue: "The Arts House Trust, Pah Homestead",
    date: "21/2/2025"
  },
  {
    id: 25,
    text: "Absolutely incredible! The first time we saw them was at my sisters wedding and because they were so good we booked them for ours. Great at reading the crowd and choosing the right songs to perform, they have a wide range of music too. These guys should be your top pick, couldn't recommend them enough!",
    author: "Hannah Shepherd",
    event: "Wedding",
    venue: "Private Residence",
    date: "15/2/2025"
  },
  {
    id: 5,
    text: "Sam & James were just the ticket for our big party. It ended up with mostly overseas guests on the dance floor so they didn't know a bunch of the kiwi classics but Sam & James flexed perfectly to find tunes to please the crowd. We enjoyed every minute. Please pass on our thanks to Sam & James for helping make our wedding day the spectacular day it was. Our hope for an active dance floor was well and truly met thanks to them! We will definitely be recommending them to our friends.",
    author: "Laura & Simon",
    event: "Rotorua Wedding",
    venue: "The Black Barn",
    date: "12/4/2025"
  },
  {
    id: 3,
    text: "We had seen Sam and James perform at another wedding and immediately knew that we wanted them for ours! They seriously bring the vibe and are amazing performers. They covered a good mix of classics and modern covers and kept the dance floor going well into the night. I'd highly recommend them for any event!",
    author: "Joshua & Bayly",
    event: "Waikato Wedding",
    venue: "Takapoto Estate",
    date: "8/3/2025"
  },
  {
    id: 8,
    text: "We used Sam and James for our wedding in Feb – it was so easy! They were fabulous, happy to go with the flow. The acoustic set was fabulous, and the perfect addition to our afternoon. The evening was fabulous and they read the room well, getting everyone dancing away!",
    author: "Ella & Caleb",
    event: "Tauranga Wedding",
    venue: "Black Walnut",
    date: "7/2/2025"
  },
  {
    id: 26,
    text: "Sam and James were so incredible when they played at our wedding! They were so much fun, playing music that had everyone on the dance floor for hours. Our guests were raving about how much fun and how talented they are, highly recommend!",
    author: "Nicola and James Wilkins",
    event: "Wedding",
    venue: "Private Residence",
    date: "10/1/2025"
  },
  {
    id: 27,
    text: "We had Copper Skies play at our wedding a couple of weeks ago. This talented duo played the perfect mix of songs with all ages and stages on the dancefloor. They played a song for our first dance and then cued everyone else to join us on the dancefloor which was awesome. They really made the night, with more people dancing than we expected! Thanks guys!",
    author: "Anna and Dion Goodhue",
    event: "Wedding",
    venue: "Private Residence",
    date: "9/1/2025"
  },
  {
    id: 28,
    text: "Can not express in words how epic the band Copper Skies was for our wedding (but I'll try!) My husband and I agreed a non negotiable was to find the best band and we hit the jackpot! The dance floor was never empty and the boys created the best atmosphere! Our guests still talk about how good they were and they made our day even more unforgettable! 5 millions stars if I could ⭐",
    author: "Hannah and Matt Lasenby",
    event: "Wedding",
    venue: "Papamoa Life Saving Club",
    date: "20/12/2024"
  },
  {
    id: 29,
    text: "They played at our Christmas work function and completely made the night — amazing music, great energy, and a brilliant vibe that had everyone up dancing and singing along. Such talented musicians and genuinely awesome guys to deal with. I'd have them back in a heartbeat!",
    author: "Amber Fraser",
    event: "Corporate Event",
    venue: "The Cargo Shed",
    date: "6/12/2024"
  },
  {
    id: 30,
    text: "The best band you'll ever come across! If you're after sing alongs everyone knows, a packed dance floor, and the kind of energy that makes the night unforgettable, Sam and James are the ones for you! I've followed their gigs for the past four years, and when it came to planning our wedding, there was no question who I wanted to play. They brought the best vibe and completely brought our night to life. Sam and James have such a special way of making every moment feel personal and full of joy. They're easy to work with, so genuine, and you can truly tell how much they love what they do. I honestly couldn't recommend them enough! You'll never be disappointed by their talent, energy, and hearts. Sam and James will always have a special place in our hearts for making our wedding night so unforgettable.",
    author: "Keely and Cole Atkinson",
    event: "Wedding",
    venue: "Te Tumu Estate",
    date: "23/11/2024"
  },
  {
    id: 31,
    text: "The best wedding duo you could ask for! Highly recommend — we've watched these two play a few times and knew we had to have them at our wedding. They were insanely good! They read the crowd perfectly and had everyone up dancing all night. Couldn't have asked for a better vibe or better people. If you're thinking about booking them, do it!",
    author: "Izzy Cochrane",
    event: "Wedding",
    venue: "Takapoto Estate",
    date: "15/11/2024"
  },
  {
    id: 32,
    text: "We honestly can't say enough good things — they were absolutely phenomenal at our wedding! From the first song to the last, they brought such incredible energy. The dance floor was packed all night, and every single guest we've spoken to since has commented on how amazing the band was. They played a perfect mix, and got everyone up and dancing. The vibe they created was awesome. They truly helped make the night magical. We feel so lucky to have had Copper Skies as part of our big day. If you're looking for a band that will blow your guests away and leave lasting memories, book them immediately — you won't regret it!",
    author: "Jessica and James O'Brian",
    event: "Wedding",
    venue: "Orua Beach House",
    date: "7/10/2024"
  },
  {
    id: 4,
    text: "Sam & James were absolutely awesome. They kept us on the dance floor all evening. The music was great. And everyone raved about them afterwards. Thanks again guys.",
    author: "Kim & Debi",
    event: "Bay of Plenty Birthday",
    venue: "Waiaua Marae",
    date: "20/7/2024"
  },
  {
    id: 2,
    text: "We used Sam and James and we honestly could not recommend them highly enough. Our guests are RAVING about them and we had the dancefloor of our dreams. Sam and James had never played at our venue before (Mudbrick on Waiheke) but you would never ever know. They were timely, set up efficiently and in perfect locations and worked with our other vendors like they had done so before. Both Sam and James interacted with our guests / the crowd so well and they played without a break – switching between the two of them to change things up every now and then. We have minimal guidance on the song choices, they just read the crowd and sang what they thought would work best – they ABSOLUTELY NAILED IT. I have to confess we got slightly cold feet in the lead up to the wedding because Sam and James' demo clips show that they are quite country focussed and we also weren't sure whether it would be better to go with a DJ so people could dance to the original versions of the songs. HOWEVER thank god we didn't change – those demos do not do them any justice at all. They sang a huge variety of songs, not just country, and their voices are incredible. They can do it all – they played during our ceremony while we signed the paperwork, after our ceremony during a cocktail hour and then for hours with a cranking dancefloor. They looked like they had lots of fun and wanted to be there, which made everyone feel really good. If you can't tell already… do not hesitate to book these guys!! Thanks Jan, Sam and James for giving us the night of our lives!",
    author: "Grace Mason",
    event: "Waiheke Wedding",
    venue: "Mudbrick Vineyard Estate",
    date: "12/4/2024"
  },
  {
    id: 9,
    text: "Had these guys for hubby's 50th and what an awesome night! It was an absolute pleasure to have Sam & James out on the farm, to share in our evening. Everyone has been raving over their performance and we all had a great time dancing and singing along. It was a night we'll never forget, you guys rock! Cheers",
    author: "Steve and Donna Knight",
    event: "Tauranga Birthday",
    venue: "Private Residence",
    date: "5/4/2024"
  },
  {
    id: 7,
    text: "Sam and James were our wedding duo a few weeks ago, they played an acoustic set and dance floor set and both were incredible! They were interactive and energetic and had everyone on the dance floor the whole night! All our family and friends were raving about them, they loved all the music they played and dancing the night away! We highly recommend Sam & James for any event! Thanks again, absolutely made our day & night!",
    author: "Quinn Youngmann",
    event: "Bay of Plenty Wedding",
    venue: "Venue Not Specified",
    date: "24/2/2024"
  },
  {
    id: 10,
    text: "Sam and James are the best band you will ever book for an event. They played for us at our wedding this Feb and they exceeded all of our expectations. All the best songs and some epic country numbers. They learnt a song for us at pretty short notice and absolutely nailed it! Everyone was dancing from the first song till the very last. Nearly every person at our wedding has said how amazing the guys were. They've earned themselves a wedding party of groupies. Sam and James you were incredible! You made our wedding a night we'll never forget. One friend even said she had to put deep heat on her calves from dancing so much! If you want to sing and dance your heart out you have to book these guys! Thank you again!",
    author: "Alex & Danielle",
    event: "Cambridge Wedding",
    venue: "Private Property",
    date: "17/2/2024"
  },
  {
    id: 11,
    text: "We had Sam and James and they were absolutely UNREAL! They really were one of the highlights of our wedding day and everyone has been raving about them since saying WOW your band! Who are they, we want them for our event! (very much looking forward to that). They bought the vibes, read the room and played awesome tunes and even took requests on the night from guests. Jake and I feel so stoked about how lucky we were to have such an incredible band play at our wedding! The dance floor was non-stop packed and going off for 3 hours straight. Everyone has been asking for their names since our wedding day. Hands down, best wedding band ever. Such cool guys and easy to communicate with. They really want the guests and bride/groom to have the time of their lives. They even let me sing my fav song, Man I feel Like a Woman up on stage.. Looking forward to listening to them again when they play at bars around Tauranga.",
    author: "Jess & Jacob",
    event: "Tauranga Wedding",
    venue: "L'Orangerie",
    date: "2/2/2024"
  },
  {
    id: 6,
    text: "My twin sister and I had our 50th birthday celebrations in Taupo. Sam and James were truly legendary, they read the crowd perfectly and had everyone up and dancing the entire night. They brought so much fun and energy to their performance we'll definitely use them again in the future. It was such a fantastic evening and that's all down to Sam and James and their ability to engage with the audience. We would highly recommend them to anyone looking for memorable entertainment 😃😃😃",
    author: "Tracy & Tara",
    event: "Taupo 50th Birthday",
    venue: "Lake Taupo Yacht Club",
    date: "18/11/2023"
  },
  {
    id: 1,
    text: "I'd like to say that Sam and James exceeded our expectations. They were absolutely amazing and had all the guests on their feet for the entire evening.",
    author: "Tracy Sexton",
    event: "Joint 50th Birthday",
    venue: "Lake Taupo Yacht Club",
    date: "18/11/2023"
  },
  {
    id: 19,
    text: "You will not find better than Sam and James! These guys are seriously outstanding and had our dance floor cranking the whole night. Amazingly talented and seemed to enjoy themselves as much as we did. We had so many comments after the wedding about the band and we cannot recommend Sam and James enough. Thank you thank you thank you!",
    author: "Emma Langman",
    event: "Bay of Plenty Wedding",
    venue: "Omahanui Venue",
    date: "31/3/2023"
  },
  {
    id: 18,
    text: "We had Sam & James for our Coromandel wedding and they were just INCREDIBLE! They keep everyone dancing for 3 hrs and more. We are extremely happy with all the service delivered by better band.",
    author: "Tamy Rosansky",
    event: "Coromandel Wedding",
    venue: "Star & Garter Hotel",
    date: "11/3/2023"
  },
  {
    id: 17,
    text: "Sam & James played for us at a wrap-party for a staff conference. They were fantastic and understood the energy required throughout the evening. They were great to deal with and even let one of our staff members steal a mic, and the spotlight for a song! Highly recommend, fantastic voices and incredible musicians.",
    author: "Olivia Dobbs",
    event: "Tauranga Corporate",
    venue: "Top10 Holiday Parks",
    date: "4/3/2023"
  },
  {
    id: 15,
    text: "Sam and James were absolutely incredible at our wedding. They nailed our entrance songs, Kept the dancefloor going all night, were so funny and created the best atmosphere! Couldn't recommend them enough!",
    author: "Olivia Hopkins",
    event: "Coromandel Wedding",
    venue: "Stone Terrace Guest House",
    date: "4/3/2023"
  },
  {
    id: 13,
    text: "Sam and James played for our wedding and what a treat! Right from the start they were easy to communicate with and just genuinely nice guys. After hearing a few YouTube videos of them play we were excited but in no way did we expect what we got. They read the crowd and the dance floor was never empty, they were absolutely fantastic! Our guests were raving about them and a few commented about booking them for their event. (We can't wait). Thank you both for making it such a special, memorable evening. Felt like we were partying the night away with old friends. (Even the neighbours wanted to come and join in) Thanks again guys and hopefully see you soon!",
    author: "Kristin & Oscar",
    event: "Bay of Plenty Wedding",
    venue: "Private Residence Opotiki",
    date: "4/2/2023"
  },
  {
    id: 12,
    text: "We were SO pleased that our original band fell through and we ended up with Sam & James. Sam was so professional and very easy to communicate with. You know it's a great wedding when people come away with sore feet from dancing the whole night. We were so so so happy with the vibe they created and their talent is incredible. I'm gutted we were away for photos and couldn't enjoy the acoustic music during canapés as it sounded so good! So many compliments from everyone who attended. Would highly recommend them to everyone.",
    author: "Alice Chapman",
    event: "Tauranga Wedding",
    venue: "Black Walnut",
    date: "16/4/2022"
  },
  {
    id: 14,
    text: "We made a pretty last minute decision to find a live band for our December wedding and we couldn't have been more lucky to have Sam & James as part of our special day! They were incredibly lovely and brought the most wonderful atmosphere to our reception. They were both super professional and made the entire process leading up to the wedding stress free. Our friends and family absolutely raved about them afterwards and continue to say they were just the perfect end to a perfect day. We can't thank you both enough for making our wedding night the best night of our lives — thank you so much!!",
    author: "Hannah Kirby",
    event: "Mount Maunganui Wedding",
    venue: "Mount Maunganui Surf Club",
    date: "10/12/2022"
  },
  {
    id: 16,
    text: "We had the pleasure of meeting Sam and James at a wedding recently, as a wedding vender we get to see loads of bands and can honestly say they are the best we have ever seen. From the start to the finish and a bonus they are just the nicest people. If we ever have a big event we will be trying to book these guys.",
    author: "Karen Curtis",
    event: "Tauranga Wedding",
    venue: "Vendor Review",
    date: "Not Specified"
  }
];
