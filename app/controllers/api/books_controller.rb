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
end
