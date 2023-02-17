

Book.destroy_all
Reader.destroy_all
UserCollection.destroy_all
Note.destroy_all

# Seed your database here
# readers
puts "Seeding readers 👥..."
  Reader.create(first_name: "Clyde", last_name: "Qasolli", username: "cqasolli", email: "cqasolli@example.com", password: "abc123")
  Reader.create(first_name: "Miki", last_name: "Kahana", username: "mkahana", email: "mkahana@example.com", password: "abc123")
  Reader.create(first_name: "Shadiya", last_name: "Egal", username: "segal", email: "segal@example.com", password: "abc123")
  Reader.create(first_name: "Jess", last_name: "Andrade", username: "jandrade", email: "jandrade@example.com", password: "abc123")  

UserCollection.create(
    image_url: "https://m.media-amazon.com/images/I/81koLrk+hFL._AC_UF350,350_QL50_.jpg",
    title: "Blue Remembered Earth",
    author: "Miriam Davis",
    published_year: 1950,
    description: "Velit sint consectetur. Qui ipsum non. Voluptates autem et. Voluptatem accusamus quas. Reiciendis perspiciatis fugit.",
    reader_id: Reader.first.id
)
UserCollection.create(
  image_url: "https://m.media-amazon.com/images/I/51oIn0YK9-L._AC_UF894,1000_QL80_.jpg",
    title: "The Last Enemy",
    author: "Arturo Bode LLD",
    published_year: 1920,
    description: "Magnam qui consectetur. Ex voluptas nesciunt. Fugiat rem quia. Saepe eum est. Unde harum quis.",
  reader_id: Reader.first.id
)

  

puts "Seeding books 📚..."

  Book.create!(
    image_url: "https://m.media-amazon.com/images/I/81koLrk+hFL._AC_UF350,350_QL50_.jpg",
    title: "Blue Remembered Earth",
    author: "Miriam Davis",
    published_year: 1950,
    description: "Velit sint consectetur. Qui ipsum non. Voluptates autem et. Voluptatem accusamus quas. Reiciendis perspiciatis fugit."
  )
  Book.create!(
    image_url: "https://m.media-amazon.com/images/I/51oIn0YK9-L._AC_UF894,1000_QL80_.jpg",
    title: "The Last Enemy",
    author: "Arturo Bode LLD",
    published_year: 1920,
    description: "Magnam qui consectetur. Ex voluptas nesciunt. Fugiat rem quia. Saepe eum est. Unde harum quis."
  )
  Book.create!(
    image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1593228727l/151370.jpg",
    title: "Many Waters",
    author: "Iliana Kunze",
    published_year: 2003,
    description: "Omnis officia dignissimos. Veniam cupiditate doloribus. Maiores non aliquam. Et et iusto. Non maxime voluptas."
  )
  Book.create!(
    image_url: "https://m.media-amazon.com/images/I/51fxhEMPPKL.jpg",
    title: "No Highway",
    author: "Fredy Stracke",
    published_year: 1933,
    description: "Sed voluptas cumque. Dignissimos sapiente adipisci. Corporis eos sequi. In expedita omnis. Aut perspiciatis dolor."
  )
  Book.create!(
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51R10w2Km0L._AC_UL900_SR615,900_.jpg",
    title: "The Monkey's Raincoat",
    author: "Ron Awer",
    published_year: 1934,
    description: "Ut nostrum voluptas. A et quia. Aut accusamus ut. Assumenda fuga repellendus. Vero exercitationem odit."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
    title: "Book Lovers",
    author: "Emily Henry",
    published_year: 2022,
    description: "An insightful, delightful, instant #1 New York Times bestseller from the author of Beach Read and People We Meet on Vacation."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published_year: 1960,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it."
  )
  Book.find_or_create_by(
    image_url: "https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    published_year: 1997,
    description: "The book that introduced us to the wizarding world, Rowing’s Harry Potter and the Sorcerer’s Stone is the beginning of a magical journey no reader will want to miss. Follow the boy who lived as he navigates his first year at Hogwarts."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published_year: 1813,
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg",
    title: "Animal Farm",
    author: "George Orwell",
    published_year: 1945,
    description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg",
    title: "The Maid",
    author: "Nita Prose",
    published_year: 2022,
    description: "Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life's complexities all by herself. No matter—she throws herself with gusto into her work as a hotel maid. Her unique character, along with her obsessive love of cleaning and proper etiquette, make her an ideal fit for the job."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503.jpg",
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    published_year: 1950,
    description: "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503.jpg",
    title: "It Ends With Us",
    author: "Colleen Hoover",
    published_year: 2016,
    description: "It Ends with Us is a book that follows a girl named Lily who has just moved and is ready to start her life after college. Lily then meets a guy named Ryle and she falls for him. As she is developing feelings for Ryle, Atlas, her first love, reappears and challenges the relationship between Lily and Ryle."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673458354i/62296528.jpg",
    title: "Spare",
    author: "Prince Harry ",
    published_year: 2023,
    description: "Spare is a memoir by Prince Harry, Duke of Sussex. Harry details his childhood and the profound effect of the death of his mother, Diana, Princess of Wales, as well as his troubled teenage years, and subsequent deployment to Afghanistan with the British Army."
  )
  Book.find_or_create_by(
    image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628625865l/58745185._SY475_.jpg",
    title: "Malibu Rising",
    author: "Taylor Jenkins Reid",
    published_year: 2021,
    description:"Malibu Rising is a story about one unforgettable night in the life of a family: the night they each have to choose what they will keep from the people who made them . . . and what they will leave behind."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    published_year: 1988,
    description: "The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    published_year: 2003,
    description: "The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published_year: 1951,
    description: "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable. The events are related after the fact"
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published_year: 1925,
    description: "The Great Gatsby, follows Jay Gatsby, a man who orders his life around one desire: to be reunited with Daisy Buchanan, the love he lost five years earlier. Gatsby's quest leads him from poverty to wealth, into the arms of his beloved, and eventually to death."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634158558i/59344312.jpg",
    title: "Verity",
    author: "Colleen Hoover",
    published_year: 2018,
    description: "Verity focuses on the life of Lowen Ashleigh, a young writer living in New York City struggling for money and not really living the life she envisioned. One day she bumps into a man who will change her life forever in more ways than one."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584633432i/50623864.jpg",
    title: "The Invisible Life of Addie Larue",
    author: "V.E. Schwab",
    published_year: 2020,
    description: "The story follows a young French woman in 1714 who makes a bargain with the Dark that makes her immortal, but curses her to be forgotten by everyone she meets."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    published_year: 2008,
    description: "In what was once North America, the Capitol of Panem maintains its hold on its 12 districts by forcing them each to select a boy and a girl, called Tributes, to compete in a nationally televised event called the Hunger Games."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg",
    title: "The Fault in Our Stars",
    author: "John Green",
    published_year: 2012,
    description: "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam. Hazel and Augustus are two teenagers who share an acerbic wit, a disdain for the conventional, and a love that sweeps them on a journey."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg",
    title: "Gone Girl",
    author: "Gillian Flynn",
    published_year: 2012,
    description: "Gone Girl by Gillian Flynn centers its story about Nick and Amy Dunne's strained marriage relationship. Nick used to work as a journalist, but loses his job. With his broke financial status, Nick decides to relocate from New York City to his smaller home town, North Carthage."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1394988109i/22034.jpg",
    title: "The Godfather",
    author: "Mario Puzo",
    published_year: 1969,
    description: "The Godfather is a crime novel by American author Mario Puzo. Originally published in 1969 by G. P. Putnam's Sons, the novel details the story of a fictional Mafia family in New York City, headed by Vito Corleone, the Godfather."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388793265i/39988.jpg",
    title: "Matilda",
    author: "Roald Dahl",
    published_year: 1988,
    description: "A young girl named Matilda Wormwood, who has an incredible intellect and magic powers, including the ability to levitate objects. She is a lover of books, and can read stories meant for adults by the age of four. Her clear intelligence goes unnoticed by her uncaring family, who often treat her badly."
  )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442129426i/231804.jpg",
    title: "The Outsider",
    author: "S.E. Hinton",
    published_year: 1967,
    description: "The Outsiders is about two weeks in the life of a 14-year-old boy. The novel tells the story of Ponyboy Curtis and his struggles with right and wrong in a society in which he believes that he is an outsider."
    )
  Book.find_or_create_by(
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375168676i/179780.jpg",
    title: "The Exorcist",
    author: "William Peter Blatty",
    published_year: 1971,
    description: "The Exorcist is a 1971 horror novel by American writer William Peter Blatty. The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a famous actress, and the two priests who attempt to exorcise the demon."
  )


#Seeding Notes
Note.create(note: "Good Book", reader_id:Reader.first.id, user_collection_id:UserCollection.all.sample.id)

puts "✅ Done seeding!"
