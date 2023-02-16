

Book.destroy_all
Reader.destroy_all
UserCollection.destroy_all

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
  reader_id: Reader.second.id
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

puts "✅ Done seeding!"
