class Api::BooksController < ApiController
  def initialize
    @books = Book.all
  end

  def index
    render json: @books.to_json(include: [:author, :rating, :progress])
  end

  def show
    book = @books.find(params[:id])

    render json: book.to_json(include: [:author, :rating, :progress])
  end

  def create
    puts 'easily findable - create book'
    puts params
    puts params[:title]
    @book = Book.create(title: params[:title], author_id: params[:author_id])
  end
end
