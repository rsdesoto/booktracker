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

  def create
    puts 'easily findable'
    puts params
    puts params[:name]
    puts 'end findable'
    @author = Author.create(name: params[:name])
  end
end
