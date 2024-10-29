<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::create([
            'title' => 'The Great Gatsby',
            'author' => 'F. Scott Fitzgerald',
            'published_year' => 1925,
            'genre' => 'Novel',
            'description' => 'A story about the Jazz Age in the United States.',
        ]);

        Book::create([
            'title' => 'To Kill a Mockingbird',
            'author' => 'Harper Lee',
            'published_year' => 1960,
            'genre' => 'Novel',
            'description' => 'A novel about the serious issues of rape and racial inequality.',
        ]);

        Book::create([
            'title' => '1984',
            'author' => 'George Orwell',
            'published_year' => 1949,
            'genre' => 'Dystopian',
            'description' => 'A political novel about totalitarianism and surveillance.',
        ]);

        Book::create([
            'title' => 'Pride and Prejudice',
            'author' => 'Jane Austen',
            'published_year' => 1813,
            'genre' => 'Romance',
            'description' => 'A story about love and social standing.',
        ]);

        Book::create([
            'title' => 'The Catcher in the Rye',
            'author' => 'J.D. Salinger',
            'published_year' => 1951,
            'genre' => 'Novel',
            'description' => 'A story about teenage angst and alienation.',
        ]);

        Book::create([
            'title' => 'Moby-Dick',
            'author' => 'Herman Melville',
            'published_year' => 1851,
            'genre' => 'Adventure',
            'description' => 'A novel about the obsessive quest of Captain Ahab.',
        ]);

        Book::create([
            'title' => 'War and Peace',
            'author' => 'Leo Tolstoy',
            'published_year' => 1869,
            'genre' => 'Historical',
            'description' => 'A story that chronicles the French invasion of Russia.',
        ]);

        Book::create([
            'title' => 'The Odyssey',
            'author' => 'Homer',
            'published_year' => 1900,
            'genre' => 'Epic',
            'description' => 'An epic poem about the hero Odysseus.',
        ]);

        Book::create([
            'title' => 'The Picture of Dorian Gray',
            'author' => 'Oscar Wilde',
            'published_year' => 1890,
            'genre' => 'Philosophical',
            'description' => 'A story about vanity and moral duplicity.',
        ]);

        Book::create([
            'title' => 'Brave New World',
            'author' => 'Aldous Huxley',
            'published_year' => 1932,
            'genre' => 'Dystopian',
            'description' => 'A novel about a futuristic society driven by technological advancements.',
        ]);
    }
}
