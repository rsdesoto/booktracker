class Api::AuthorsController < ApiController
  def initialize
    @authors = Author.all
  end

  def index
    render json: @authors.to_json
  end

  def show
    render json: @authors.find(params[:id]).to_json
  end
end
