class Api::BooksController < ApiController
  def initialize
    @books = Book.all
  end

  def index
    render json: @books.to_json
  end

  def show
    render json: @books.find(params[:id]).to_json
  end
end
