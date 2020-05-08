class Api::V1::StatsController < ApplicationController
    skip_before_action :verify_authenticity_token
  def index
      stat = Stat.all.order(created_at: :desc)
      render json: stat
  end

  def create
      stat = Stat.create!(stat_params)
      if stat
          render json: stat
      else
          render json: stat.errors
      end
  end

  def show
      if stat
          render json: stat
      else
          render json: stat.errors
      end
  end

  def destroy
  end

  def update
      stat = Stat.find(params[:id])
      stat.update(stat_params)

      stat = Stat.all.order(created_at: :desc)
      render json: stat
  end

  private

  def stat_params
      params.permit(:gycScore, :gycWish20, :gycWish50, :gycWish100, :hyScore, :hyWish20, :hyWish50, :hyWish100)
  end

  def stat
      @stat ||= Stat.find(params[:id])
  end
end
