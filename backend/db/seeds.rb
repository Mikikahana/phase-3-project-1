
puts "🌱 Seeding spices..."
Book.destroy_all
Reader.destroy_all

# Seed your database here
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


  # readers
  puts "Seeding readers 👥..."
    Reader.create(first_name: "Clyde", last_name: "Qasolli", username: "cqasolli", email: "cqasolli@example.com", password: "abc123")
    Reader.create(first_name: "Miki", last_name: "Kahana", username: "mkahana", email: "mkahana@example.com", password: "abc123")
    Reader.create(first_name: "Shadiya", last_name: "Egal", username: "segal", email: "segal@example.com", password: "abc123")
    Reader.create(first_name: "Jess", last_name: "Andrade", username: "jandrade", email: "jandrade@example.com", password: "abc123")  

 

puts "✅ Done seeding!"
