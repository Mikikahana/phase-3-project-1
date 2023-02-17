

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
    author: "Alastair Reynolds",
    published_year: 2012,
    description: "Blue Remembered Earth is a science fiction novel by Welsh author Alastair Reynolds, first published by Gollancz on 19 January 2012. It describes the efforts of two adult siblings to solve a mystery in the pseudo-utopian 2160s..",
    reader_id: Reader.first.id
)

puts "Seeding books 📚..."

  Book.create!(
    image_url: "https://m.media-amazon.com/images/I/81koLrk+hFL._AC_UF350,350_QL50_.jpg",
    title: "Blue Remembered Earth",
    author: "Alastair Reynolds",
    published_year: 2012,
    description: "Blue Remembered Earth is a science fiction novel by Welsh author Alastair Reynolds, first published by Gollancz on 19 January 2012. It describes the efforts of two adult siblings to solve a mystery in the pseudo-utopian 2160s."
  )
  Book.create!(
    image_url: "https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg",
    title: "Ender's Game",
    author: "Orson Scott Card",
    published_year: 1985,
    description: "The novel tells the story of a young boy, Ender Wiggin, who is sent to a training academy named Battle School, located in orbit above the Earth, built to train people to become soldiers that will one day battle against a vast alien race known as 'Buggers'."
  )
  Book.create!(
    image_url: "data:image/jpeg;base64,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",
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    published_year: 2003,
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
  )
  Book.create!(
    image_url: "https://contentcafecloud.baker-taylor.com/Jacket.svc/D65D0665-050A-487B-9908-16E6D8FF5C3E/9781609456726/Medium/Empty",
    title: "Brotherhood",
    author: "Mohamed Mbougar Sarr",
    published_year: 2021,
    description: "A brilliant work depicting the brutality of a tyrannical regime. This novel by a young Senegalese writer has won many awards in France."
  )
  Book.create!(
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51R10w2Km0L._AC_UL900_SR615,900_.jpg",
    title: "The Monkey's Raincoat",
    author: "Robert Crais",
    published_year: 1987,
    description: "The Monkey's Raincoat is a 1987 detective novel by Robert Crais. It is the first in a series of linked novels centering on the private investigator Elvis Cole and his partner Joe Pike."
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
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTea9Dc-wzq3fborgXv0qbW8Vcz5g4W82TF7Q&usqp=CAU",
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
